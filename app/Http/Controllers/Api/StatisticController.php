<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Beneficiary;
use App\Models\Recommender;

class StatisticController extends Controller
{
    public function recommender()
    {
        $res['title'] = __('RecommenderStatistic');
        $data = [];
        $recommenders = Recommender::with(['user:id,name'])->withCount('beneficiaries')->get();
        foreach ($recommenders as $recommender) {
            $data[] = [
                $recommender->user->name, $recommender->beneficiaries_count,
            ];
        }
        $res['data'] = $data;

        return response()->json($res, 200);
    }

    public function ward()
    {
        $data = [];
        $collection = Beneficiary::with(['ward:id,name'])->groupBy('ward_id')
            ->selectRaw('count(*) as total, ward_id')
            ->get();
        foreach ($collection as $ward) {
            $data[] = [
                $ward->ward->name . ' ' . __('Number'), $ward->total,
            ];
        }
        $res['data'] = $data;

        return response()->json($res, 200);
    }
}
