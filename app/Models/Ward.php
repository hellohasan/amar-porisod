<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'wards';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'area',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];
}
