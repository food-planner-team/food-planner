<?php

namespace App\Models;

use App\Support\Traits\Filterable;
use App\Support\Traits\Searchable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RecipeItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'receipt_id',
        'quantity',
        'optional',
    ];
    public function recipe(): BelongsTo
    {
        return $this->belongsTo(RecipeItem::class);
    }
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
