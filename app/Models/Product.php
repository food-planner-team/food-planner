<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Product extends Model
{
    use HasFactory, Filterable, Searchable;

    protected $fillable = [
        'name',
        'user_id',
        'quantity_type',
        'kcal',
        'status'
    ];

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getFormattedQuantityWithType($quantity)
    {
        switch ($this->quantity_type) {
            case 'g':
                if ($quantity > 1000) return $quantity / 1000 . ' - kg';
                if ($quantity > 100) return $quantity / 10 . ' - dag';
                return $quantity . ' - g';
            case 'ml':
                if ($quantity > 1000) return $quantity / 1000 . ' - l';
                return $quantity . ' - ml';
            default:
                return $quantity . ' - szt';
        }
    }
}
