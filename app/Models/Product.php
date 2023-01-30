<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, Filterable, Searchable;
    protected $fillable = [
        'parent_id',
        'name',
        'quantity',
        'quantity_type',
        'image_id',
        'external_id',
        'provider',
    ];
}
