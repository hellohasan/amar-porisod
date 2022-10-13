<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Beneficiary;
use App\Models\Recommender;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    public function index()
    {
        $res['total_beneficiary'] = Beneficiary::count();
        $res['total_recommender'] = Recommender::count();
        $res['total_user'] = User::count();
        return response()->json($res, 200);
    }

    public function getUserList()
    {
        return User::with('roles:id,name')->orderByDesc('id')->get();
    }

    /**
     * @param Request $request
     */
    public function storeUser(Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'email'    => 'required|unique:users,email',
            'role'     => 'required|integer',
            'password' => ['required', RulesPassword::default()],
        ]);

        $in = $request->except(['role', 'password']);
        $in['password'] = bcrypt(request('password'));
        $user = User::create($in);

        $role = Role::findById($request->role, 'api');
        $user->assignRole($role);

        return Response::json(['message' => 'Done'], 200);
    }

    /**
     * @param Request $request
     * @param $id
     */
    public function updateUser(Request $request, $id)
    {

        $user = User::findOrFail($id);

        $request->validate([
            'name'     => 'required|max:191',
            'email'    => 'required|max:191|unique:users,email,' . $id,
            'password' => ['sometimes', RulesPassword::default()],
            'role'     => 'required',
        ]);

        $in = $request->except(['role']);
        if ($request->input('password')) {
            $in['password'] = bcrypt($request->input('password'));
        }
        $role = Role::findById($request->role, 'api');
        $user->syncRoles($role);
        $user->update($in);

        return response()->json(['message' => 'Done'], 200);

    }

    /**
     * @param Request $request
     */
    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    }

    public function getRoleList()
    {
        return Role::select('id', 'name as text')->get();
    }
}
