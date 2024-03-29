<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Beneficiary;
use App\Models\ProjectBeneficiary;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Jenssegers\Date\Date;
use Yajra\DataTables\Facades\DataTables;

class BeneficiaryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:beneficiaries', ['only' => ['index']]);
        $this->middleware('permission:beneficiaries-store', ['only' => ['store']]);
        $this->middleware('permission:beneficiaries-edit', ['only' => ['edit']]);
        $this->middleware('permission:beneficiaries-update', ['only' => ['update']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $data = Beneficiary::select(['*', DB::raw("CONCAT(name,' - ',phone) as custom_name")])->with([
            'ward:id,name',
        ])->withCount('benefits');

        Date::setLocale(app()->getLocale());

        return DataTables::of($data)
            ->addIndexColumn()
            ->editColumn('created_at', function ($row) {
                return Date::parse($row->created_at)->format('dS F, Y');
            })
            ->filterColumn('custom_name', function ($query, $keyword) {
                $query->whereRaw("CONCAT(name,' - ',phone) like ?", ["%{$keyword}%"]);
            })
            ->editColumn('ward_id', function ($row) {
                return $row->ward->name . ' ' . __('Number');
            })
            ->filterColumn('ward_id', function ($query, $keyword) {
                $query->whereHas('ward', function ($query) use ($keyword) {
                    $query->whereRaw("name like ?", ["%{$keyword}%"]);
                });
            })
            ->editColumn('status', function ($row) {
                $class = $row->status ? "success" : "warning";
                $text = $row->status ? __("Activated") : __("Deactivated");
                return "<span class='badge badge-{$class}'>{$text}</span>";
            })
            ->addColumn('total', function ($row) {
                return BengaliConvert($row->benefits_count) . ' ' . __('s');
            })
            ->setRowClass(function ($row) {
                return !$row->status ? 'bg-danger' : '';
            })
            ->addColumn('action', function ($row) use ($user) {
                $btn = '';
                if ($user->hasPermissionTo('beneficiaries-edit')) {
                    $btn .= '<button type="button" data-id="' . $row->id . '" data-action="edit" class="btn btn-sm btn-success"><i class="fas fa-edit"></i></button>&nbsp;';
                }
                if ($user->hasPermissionTo('beneficiaries-destroy')) {
                    $btn .= '<button type="button" data-id="' . $row->id . '" data-action="delete" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>';
                }
                return $btn;
            })
            ->rawColumns(['status', 'action'])
            ->make(true);
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
            'ward_id' => 'required',
            'nid'     => 'required|digits_between:10,13|unique:beneficiaries,nid',
        ]);
        Beneficiary::create($request->all());
        return response()->json(['message' => 'done'], 200);
    }

    /**
     * Edit the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Beneficiary::findOrFail($id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $beneficiary = Beneficiary::findOrFail($id);
        $request->validate([
            'ward_id' => 'required',
            'nid'     => 'required|digits_between:10,13|unique:beneficiaries,nid,' . $id,
        ]);
        $beneficiary->update($request->all());
        return response()->json(['message' => 'done'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $beneficiary = Beneficiary::findOrFail($id);
        ProjectBeneficiary::whereBeneficiaryId($id)->delete();
        $beneficiary->delete();
    }

    /**
     * @param Request $request
     */
    public function search(Request $request)
    {
        $request->validate([
            'search' => 'required|digits_between:10,13',
        ]);

        $search = $request->input('search');

        $beneficiary = Beneficiary::query()
            ->with('ward:id,name')
            ->where('nid', 'LIKE', "%{$search}%")
            ->orWhere('phone', 'LIKE', "%{$search}%")
            ->first();
        $res['beneficiary'] = $beneficiary;

        $projects = [];
        if ($beneficiary) {
            $benefits = ProjectBeneficiary::with([
                'project:id,name',
                'recommender.user:id,name',
                'recommender.ward:id,name',
            ])->whereBeneficiaryId($beneficiary->id)
                ->orderByDesc('id')
                ->get();
            foreach ($benefits as $benefit) {
                $projects[] = [
                    'name'        => $benefit->project->name,
                    'date'        => $benefit->created_at->format('dS M, Y'),
                    'recommender' => '(' . $benefit->recommender->ward->name . ') ' . $benefit->recommender->user->name,
                ];
            }
        }

        $res['projects'] = $projects;

        return response()->json($res, 200);

    }
}
