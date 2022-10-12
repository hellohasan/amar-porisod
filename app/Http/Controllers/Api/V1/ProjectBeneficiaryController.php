<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Beneficiary;
use App\Models\Project;
use App\Models\ProjectBeneficiary;
use App\Models\Recommender;
use Illuminate\Http\Request;

class ProjectBeneficiaryController extends Controller
{

    /**
     * @param $id
     */
    public function loadProjectDetail($id)
    {
        $project = Project::findOrFail($id);
        $recommenderIds = $project->recommenders->pluck('recommender_id')->toArray();
        $recommenders = Recommender::with(['user', 'ward'])->whereIn('id', $recommenderIds)->get();
        $recom = [];
        foreach ($recommenders as $recommender) {
            $recom[] = [
                'id'   => $recommender->id,
                'text' => '(' . $recommender->ward->name . ') ' . $recommender->user->name,
            ];
        }

        $res = [
            'date'         => $project->date,
            'total'        => $project->total,
            'recommenders' => $recom,
        ];

        return response()->json($res, 200);
    }

    /**
     * @param Request $request
     */
    public function search(Request $request)
    {
        $request->validate([
            'nid' => 'required|numeric|digits_between:10,13',
        ]);

        $beneficiary = Beneficiary::whereNid($request->input('nid'))->first();
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
                    'recommender' => $benefit->recommender->user->name,
                    'ward'        => $benefit->recommender->ward->name,
                ];
            }
        }

        $res = ['projects' => $projects];

        return response()->json($res, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->validate([
            'project_id'     => 'required',
            'recommender_id' => 'required',
        ]);

        $project = Project::findOrFail($request->input('project_id'));
        $beneficiaries = ProjectBeneficiary::whereProjectId($project->id)
            ->when($request->input('recommender_id') != 0, function ($query) use ($request) {
                $query->where('recommender_id', $request->input('recommender_id'));
            })
            ->with([
                'recommender.user:id,name',
                'recommender.ward:id,name',
                'beneficiary:id,name,nid,phone',
            ])
            ->orderBy('recommender_id', 'asc')
            ->get();

        $res['name'] = $project->name;
        $res['total'] = $beneficiaries->count();
        $res['beneficiaries'] = $beneficiaries;
        if ($request->input('recommender_id')) {
            $rec = Recommender::with(['user:id,name', 'ward:id,name'])->findOrFail($request->input('recommender_id'));
            $res['showWard'] = false;
            $res['ward'] = $rec->ward->name;
            $res['recommender'] = $rec->user->name;
        } else {
            $res['showWard'] = true;
            $res['ward'] = __('AllWard');
            $res['recommender'] = __('AllRecommender');
        }

        return response()->json($res, 200);

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
            'project_id'     => 'required',
            'recommender_id' => 'required',
            'nid'            => 'required|numeric|digits_between:10,13',
        ]);

        $beneficiary = Beneficiary::with([
            'ward:id,name',
        ])->whereNid($request->input('nid'))->first();

        if ($beneficiary) {
            $projectBeneficiary = ProjectBeneficiary::where([
                'project_id'     => $request->input('project_id'),
                'beneficiary_id' => $beneficiary->id,
            ])->exists();

            if ($projectBeneficiary) {
                $res = ['type' => 'duplicate'];
            } else {
                $tt = ProjectBeneficiary::create([
                    'project_id'     => $request->input('project_id'),
                    'recommender_id' => $request->input('recommender_id'),
                    'beneficiary_id' => $beneficiary->id,
                ]);
                $lastId = ProjectBeneficiary::whereProjectId($request->input('project_id'))->orderByDesc('custom')->first();
                $tt->custom = $lastId ? $lastId->custom + 1 : custom(1, 5);
                $tt->save();
                $res = ['type' => 'done'];
            }
        } else {
            $recommender = Recommender::find($request->input('recommender_id'));
            $beneficiary = Beneficiary::create([
                'nid'     => $request->input('nid'),
                'ward_id' => $recommender->ward_id,
            ]);

            $tt = ProjectBeneficiary::create([
                'project_id'     => $request->input('project_id'),
                'recommender_id' => $request->input('recommender_id'),
                'beneficiary_id' => $beneficiary->id,
            ]);
            $lastId = ProjectBeneficiary::whereProjectId($request->input('project_id'))->orderByDesc('custom')->first();
            $tt->custom = $lastId ? $lastId->custom + 1 : custom(1, 5);
            $tt->save();
            $res = ['type' => 'done'];
        }

        return response()->json($res, 200);
    }

    /**
     * @param Request $request
     */
    public function duplicate(Request $request)
    {
        $request->validate([
            'project_id'     => 'required',
            'recommender_id' => 'required',
            'nid'            => 'required|numeric|digits_between:10,13',
        ]);

        $beneficiary = Beneficiary::with([
            'ward:id,name',
        ])->whereNid($request->input('nid'))->first();

        $tt = ProjectBeneficiary::create([
            'project_id'     => $request->input('project_id'),
            'recommender_id' => $request->input('recommender_id'),
            'beneficiary_id' => $beneficiary->id,
        ]);
        $lastId = ProjectBeneficiary::whereProjectId($request->input('project_id'))->orderByDesc('custom')->first();
        $tt->custom = $lastId ? $lastId->custom + 1 : custom(1, 5);
        $tt->save();
        $res = ['type' => 'done'];
        return response()->json($res, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ProjectBeneficiary::destroy($id);
    }
}
