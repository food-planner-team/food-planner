<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $keyType = 'string';

    protected $fillable = [
        'imageable_id',
        'imageable_type',
        'name',
        'path',
        'url',
    ];
}
