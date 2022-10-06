<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
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
