<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipePreparation extends Model
{
    use HasFactory, Filterable, Searchable;
    protected $fillable = [
        'receipe_id',
        'order',
    ];
}
