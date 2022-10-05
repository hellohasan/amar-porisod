<?php

namespace App\Http\Controllers\Api\V1;

use App\Helpers\CustomHelper;
use App\Http\Controllers\Controller;
use App\Models\Recommender;
use App\Models\User;
use App\Models\Ward;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Spatie\Permission\Models\Role;

class RecommenderController extends Controller
{

    public function init()
    {
        $res['wards'] = Ward::whereStatus(true)->select(['id', 'name as text'])->get();
        $res['roles'] = Role::whereNot('id', 1)->select(['id', 'name as text'])->get();
        return response()->json($res, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recommenders = Recommender::with([
            'ward:id,name',
            'user:id,name,phone,photo',
            'user.roles:id,name',
        ])->get();
        return response()->json($recommenders, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'phone'    => 'required|unique:users,phone',
            'ward_id'  => 'required',
            'role_id'  => 'required',
            'photo'    => 'nullable|base64mimes:jpg,jpeg,png',
            'password' => 'required|min:6',
        ]);
        $us['name'] = $request->input('name');
        $us['phone'] = $request->input('phone');
        $us['password'] = bcrypt($request->input('password'));
        if ($request->photo) {
            $filename = CustomHelper::getFileNameExtension($request->input('photo'));
            Image::make($request->photo)->resize(60, 60)->save(public_path('storage/users/') . $filename);
            $us['photo'] = $filename;
        }
        $user = User::create($us);

        $role = Role::findById($request->role_id, 'api');
        $user->assignRole($role);

        $re['user_id'] = $user->id;
        $re['ward_id'] = $request->input('ward_id');
        $re['status'] = $request->input('status');

        Recommender::create($re);

        return response()->json(['message' => 'Done'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $recommender = Recommender::findOrFail($id);
        $user = $recommender->user;

        $request->validate([
            'name'     => 'required',
            'phone'    => 'required|unique:users,phone,' . $user->id,
            'ward_id'  => 'required',
            'role_id'  => 'required',
            'photo'    => 'nullable|base64mimes:jpg,jpeg,png',
            'password' => 'nullable|min:6',
        ]);
        $us['name'] = $request->input('name');
        $us['phone'] = $request->input('phone');
        if ($request->filled('password')) {
            $us['password'] = bcrypt($request->input('password'));
        }
        if ($request->photo) {
            $filename = CustomHelper::getFileNameExtension($request->input('photo'), 'user');
            Image::make($request->photo)->resize(60, 60)->save(public_path('storage/users/') . $filename);
            $us['photo'] = $filename;
            File::delete(public_path("storage/users/{$user->getRawOriginal('photo')}"));
        }
        $user->update($us);
        $oldRole = $user->roles->first();
        if ($oldRole->id != $request->input('role_id')) {
            $user->removeRole($oldRole->name, 'api');
            $role = Role::findById($request->role_id, 'api');
            $user->assignRole($role);
        }

        $re['user_id'] = $user->id;
        $re['ward_id'] = $request->input('ward_id');
        $re['status'] = $request->input('status');

        $recommender->update($re);

        return response()->json(['message' => 'Done'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
