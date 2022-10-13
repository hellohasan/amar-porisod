<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recommender extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'recommenders';

    /**
     * @var array
     */
    protected $fillable = ['user_id', 'ward_id', 'status'];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the ward that owns the Recommender
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ward(): BelongsTo
    {
        return $this->belongsTo(Ward::class, 'ward_id');
    }

    /**
     * Get the user that owns the Recommender
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get all of the beneficiaries for the Recommender
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function beneficiaries(): HasMany
    {
        return $this->hasMany(ProjectBeneficiary::class, 'recommender_id', 'id');
    }
}
