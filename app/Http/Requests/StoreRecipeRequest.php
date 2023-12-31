<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecipeRequest extends FormRequest
{
     /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'description' => 'required',
            'preparation_time' => 'required|int',
            'products.*.quantity' => 'required',
            'products.*.product_id' => 'required',
            'products.*.optional' => 'boolean',
        ];
    }
}
