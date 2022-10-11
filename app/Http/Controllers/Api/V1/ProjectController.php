<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectRecommender;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Project::with([
            'recommenders:id,project_id,recommender_id',
            'recommenders.recommender:id,user_id',
            'recommenders.recommender.user:id,name',
        ])->orderByDesc('id')->get();
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
            'name'           => 'required',
            'date'           => 'required|date_format:Y-m-d',
            'total'          => 'required|numeric',
            'recommenders'   => 'required|array',
            'recommenders.*' => 'required|numeric',
        ]);

        $in = $request->except(['recommenders']);
        $project = Project::create($in);
        foreach ($request->recommenders as $recommender) {
            $project->recommenders()->create([
                'recommender_id' => $recommender,
            ]);
        }
        return response()->json(['message' => 'done'], 200);

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
        $project = Project::findOrFail($id);
        $recommenders = $project->recommenders->pluck('recommender_id')->toArray();
        $res = [
            'name'         => $project->name,
            'date'         => $project->date,
            'total'        => $project->total,
            'status'       => $project->status,
            'recommenders' => $recommenders,
        ];

        return response()->json($res, 200);
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
        $project = Project::findOrFail($id);
        $request->validate([
            'name'           => 'required',
            'date'           => 'required|date_format:Y-m-d',
            'total'          => 'required|numeric',
            'recommenders'   => 'required|array',
            'recommenders.*' => 'required|numeric',
        ]);

        $in = $request->except(['recommenders']);
        $project->update($in);

        $oldRecommenders = $project->recommenders->pluck('recommender_id')->toArray();
        $newRecommenders = $request->input('recommenders');
        $differentId = array_diff($oldRecommenders, $newRecommenders);
        ProjectRecommender::whereProjectId($project->id)->whereIn('recommender_id', $differentId)->delete();
        foreach ($request->recommenders as $recommender) {
            ProjectRecommender::whereProjectId($project->id)->updateOrCreate(
                ['recommender_id'=> $recommender],
                [
                    'project_id'=> $project->id,
                ],
            );
        }
        // ALERT take action when project recommender delete;
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
        $project = Project::findOrFail($id);
        $project->recommenders()->delete();
        $project->delete();
    }
}
