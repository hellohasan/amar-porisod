<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Recommender;
use App\Models\Ward;
use Devfaysal\BangladeshGeocode\Models\District;
use Devfaysal\BangladeshGeocode\Models\Union;
use Devfaysal\BangladeshGeocode\Models\Upazila;

class SelectDropdownController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function loadWardList()
    {
        return Ward::whereStatus(true)->select(['id', 'name as text'])->get();
    }

    public function loadRecommenderList()
    {
        $recommenders = Recommender::with([
            'ward:id,name',
            'user:id,name',
        ])->whereStatus(true)->get();
        $res = [];
        foreach ($recommenders as $recommender) {
            $res[] = [
                'id'   => $recommender->id,
                'text' => '(' . $recommender->ward->name . ') ' . $recommender->user->name,
            ];
        }
        return response()->json($res, 200);
    }

    public function loadProjectList()
    {
        return Project::whereStatus(true)->select(['id', 'name as text'])->get();
    }

    /**
     * @param $id
     */
    public function loadProjectRecommenders($id)
    {
        $project = Project::with([
            'recommenders.recommender.user',
            'recommenders.recommender.ward',
        ])->findOrFail($id);
        $res = [];
        foreach ($project->recommenders as $recommender) {
            $res[] = [
                'id'   => $recommender->recommender_id,
                'text' => '(' . $recommender->recommender->ward->name . ') ' . $recommender->recommender->user->name,
            ];
        }
        return response()->json($res, 200);
    }

    /**
     * @param $id
     */
    public function loadDivisionDistricts($id)
    {
        return District::select(['id', 'bn_name as text'])->whereDivisionId($id)->get();
    }

    /**
     * @param $id
     */
    public function loadDistrictUpazilas($id)
    {
        return Upazila::select(['id', 'bn_name as text'])->whereDistrictId($id)->get();
    }

    /**
     * @param $id
     */
    public function loadUpazilaUnions($id)
    {
        return Union::select(['id', 'bn_name as text'])->whereUpazilaId($id)->get();
    }

}
