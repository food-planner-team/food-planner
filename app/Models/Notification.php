<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory, Filterable;

    protected $keyType = 'string';

    protected $fillable = [
        'notifiable_id',
        'notifiable_type',
        'type',
        'data',
        'read_at',
    ];
    protected $casts = [
        'read_at' => 'datetime',
    ];
}
