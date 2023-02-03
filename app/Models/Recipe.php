<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Recipe extends Model
{
    use HasFactory, Filterable, Searchable;

    protected $fillable = [
        'name',
        'description',
        'preparation_time',
        'image_id',
    ];

    public function recipeItems()
    {
        return $this->hasMany(RecipeItem::class);
    }
}
