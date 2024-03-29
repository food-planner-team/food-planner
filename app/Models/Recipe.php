<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory, Filterable, Searchable;

    protected $fillable = [
        'name',
        'description',
        'preparation',
        'kcal',
        'user_id',
        'status',
        'preparation_time',
    ];


    public function recipeItems()
    {
        return $this->hasMany(RecipeItem::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function image()
    {
        return $this->morphOne(Image::class,'imageable');
    }
}
