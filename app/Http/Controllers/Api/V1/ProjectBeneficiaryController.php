<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Project;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        //
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