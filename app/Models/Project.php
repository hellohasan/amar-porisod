<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string
     */
    protected $table = 'projects';

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'date', 'total', 'status',
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    /**
     * Get all of the recommenders for the Project
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function recommenders(): HasMany
    {
        return $this->hasMany(ProjectRecommender::class, 'project_id');
    }

    /**
     * Get all of the beneficiaries for the Project
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function beneficiaries(): HasMany
    {
        return $this->hasMany(ProjectBeneficiary::class, 'project_id');
    }
}
