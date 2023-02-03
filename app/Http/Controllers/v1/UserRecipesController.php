<?php

namespace App\Http\Controllers\v1;

use App\Models\Recipe;
use App\Models\RecipeUser;
use App\Transformers\RecipeTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UserRecipesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $recipes = $user->recipes()->filter()->get();

        return $this->fractal
            ->collection($recipes, new RecipeTransformer())
            ->get();

    }
}
