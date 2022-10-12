<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Beneficiary extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'beneficiaries';

    /**
     * @var array
     */
    protected $fillable = [
        'ward_id', 'nid', 'name', 'phone', 'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the ward that owns the Beneficiary
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ward(): BelongsTo
    {
        return $this->belongsTo(Ward::class, 'ward_id');
    }

    /**
     * Get all of the benefits for the Beneficiary
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function benefits(): HasMany
    {
        return $this->hasMany(ProjectBeneficiary::class, 'beneficiary_id');
    }
}
