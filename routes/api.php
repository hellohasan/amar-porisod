<?php

use App\Http\Controllers\Api\Auth\ForgetPasswordController;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\ResetPasswordController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\Settings\BasicSettingController;
use App\Http\Controllers\Api\Settings\LanguageSettingController;
use App\Http\Controllers\Api\Settings\PermissionController;
use App\Http\Controllers\Api\Settings\RoleController;
use App\Http\Controllers\Api\StatisticController;
use App\Http\Controllers\Api\User\UserController;
use App\Http\Controllers\Api\V1\BeneficiaryController;
use App\Http\Controllers\Api\V1\ProjectBeneficiaryController;
use App\Http\Controllers\Api\V1\ProjectController;
use App\Http\Controllers\Api\V1\RecommenderController;
use App\Http\Controllers\Api\V1\SelectDropdownController;
use App\Http\Controllers\Api\V1\WardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::prefix('auth')->group(function () {
    Route::post('login', [LoginController::class, 'login']);
    /* Route::post('register', [RegisterController::class, 'register']); */
    Route::post('logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');

    Route::post('forget-password', [ForgetPasswordController::class, 'sendPasswordResetLink']); // Send reset password mail
    Route::post('reset-password', [ResetPasswordController::class, 'reset']); // handle reset password form process

});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('change-language', [LanguageSettingController::class, 'changeLanguage']);
    Route::post('update-profile', [UserController::class, 'updateProfile']);
    Route::post('update-password', [UserController::class, 'updatePassword']);

    Route::apiResource('roles', RoleController::class)->except(['show']);
    Route::apiResource('permissions', PermissionController::class)->except(['show']);

    Route::get('user-list', [DashboardController::class, 'getUserList']);
    Route::post('user-store', [DashboardController::class, 'storeUser']);
    Route::put('user-update/{id}', [DashboardController::class, 'updateUser']);
    Route::delete('user-delete/{id}', [DashboardController::class, 'deleteUser']);

    Route::get('role-list', [DashboardController::class, 'getRoleList']);

    Route::get('basic-setting', [BasicSettingController::class, 'getBasicSetting']);
    Route::post('basic-setting-submit', [BasicSettingController::class, 'submitBasicSetting']);

    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('recommender-statistic', [StatisticController::class, 'recommender']);
    Route::get('ward-statistic', [StatisticController::class, 'ward']);

    /* ward route list */
    Route::apiResource('wards', WardController::class)->except(['show']);

    /* Recommender Route List */
    Route::get('recommenders/int', [RecommenderController::class, 'init']);
    Route::apiResource('recommenders', RecommenderController::class)->except(['show']);

    /* beneficiaries Route List */
    Route::resource('beneficiaries', BeneficiaryController::class)->except(['create', 'show']);

    /* Project Route List */
    Route::resource('projects', ProjectController::class)->except(['create']);

    Route::get('load-project-details/{id}', [ProjectBeneficiaryController::class, 'loadProjectDetail']);
    Route::post('project-beneficiaries/search', [ProjectBeneficiaryController::class, 'search']);
    Route::post('project-beneficiaries/duplicate', [ProjectBeneficiaryController::class, 'duplicate']);
    Route::get('project-beneficiaries/slip/{pId}/{rId}', [ProjectBeneficiaryController::class, 'slips']);
    Route::resource('project-beneficiaries', ProjectBeneficiaryController::class)->except(['create', 'edit', 'show', 'update']);

    Route::post('search-beneficiary', [BeneficiaryController::class, 'search']);

    Route::get('load-division-districts/{id}', [SelectDropdownController::class, 'loadDivisionDistricts']);
    Route::get('load-district-upazilas/{id}', [SelectDropdownController::class, 'loadDistrictUpazilas']);
    Route::get('load-upazila-unions/{id}', [SelectDropdownController::class, 'loadUpazilaUnions']);
    Route::get('load-ward-list', [SelectDropdownController::class, 'loadWardList']);
    Route::get('load-recommenders-lists', [SelectDropdownController::class, 'loadRecommenderList']);
    Route::get('load-project-lists', [SelectDropdownController::class, 'loadProjectList']);
    Route::get('load-project-recommenders/{id}', [SelectDropdownController::class, 'loadProjectRecommenders']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
