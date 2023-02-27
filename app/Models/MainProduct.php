<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MainProduct extends Model
{
    use HasFactory, Filterable, Searchable;

    protected $fillable = [
        'name',
        'quantity_type',
        'provider',
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'main_product_id')->orderBy('order');
    }
    public function defaultProduct(): Model|HasOne
    {
        return $this->hasOne(Product::class, 'main_product_id')->orderBy('order');
    }
}
