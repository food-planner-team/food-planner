<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GenerateShoppingListRequest extends FormRequest
{
     /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'date_start' => 'required',
            'date_end' => 'required',
        ];
    }
}
