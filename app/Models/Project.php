<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

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

    /**
     * Get all of the recommenders for the Project
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function recommenders(): HasMany
    {
        return $this->hasMany(ProjectRecommender::class, 'project_id');
    }
}
