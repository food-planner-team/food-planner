<?php

namespace App\Http\Controllers\v1;

use App\Transformers\RecipeTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserRecipesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $recipes = $user->userRecipes()->filter()->get();

        return $this->fractal
            ->collection($recipes, new RecipeTransformer())
            ->get();

    }

    public function store(Request $request)
    {
        $user = $request->user();
        $date = $request->get('date');
        DB::beginTransaction();
        try {
            $user->userRecipes()->wherePivot('date', $date)->detach();
            $recipes = $request->get('recipes');
            foreach ($recipes as $recipe) {
                $user->userRecipes()->attach($recipe['recipe_id'], [
                    'order' => $recipe['order'],
                    'date' => $date
                ]);
            }
            DB::commit();
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return $this->respondUnprocessable();
        }

        $recipes = $user->userRecipes()->wherePivot('date', $date)->get();
        return $this->fractal
            ->collection($recipes, new RecipeTransformer())
            ->get();


    }
}
