<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectBeneficiary extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'project_beneficiaries';

    /**
     * @var array
     */
    protected $fillable = [
        'project_id',
        'recommender_id',
        'beneficiary_id',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the project that owns the ProjectBeneficiary
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    /**
     * @return mixed
     */
    public function recommender()
    {
        return $this->belongsTo(Recommender::class, 'recommender_id');
    }

    /**
     * Get the beneficiary that owns the ProjectBeneficiary
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function beneficiary(): BelongsTo
    {
        return $this->belongsTo(Beneficiary::class, 'beneficiary_id');
    }
}
