<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectRecommender extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string
     */
    protected $table = 'project_recommenders';

    /**
     * @var array
     */
    protected $fillable = ['project_id', 'recommender_id'];

    /**
     * Get the recommender that owns the ProjectRecommender
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function recommender(): BelongsTo
    {
        return $this->belongsTo(Recommender::class, 'recommender_id');
    }
}
