<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RecipeItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'receipt_id',
        'main_product_id',
        'quantity',
        'optional',
    ];
    public function recipe(): BelongsTo
    {
        return $this->belongsTo(RecipeItem::class);
    }
    public function mainProduct(): BelongsTo
    {
        return $this->belongsTo(MainProduct::class);
    }
}
