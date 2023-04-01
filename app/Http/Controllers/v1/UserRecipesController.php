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
        $recipes = $user->recipes()->filter()->get();

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
            $user->recipes()->wherePivot('date', $date)->detach();
            $recipes = $request->get('recipes');
            foreach ($recipes as $recipe) {
                $user->recipes()->attach($recipe['recipe_id'],[
                    'order' => $recipe['order'],
                    'date' => $date
                ]);
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return $this->respondUnprocessable();
        }
        DB::commit();

        $recipes = $user->recipes()->wherePivot('date', $date)->get();
        return $this->fractal
            ->collection($recipes, new RecipeTransformer())
            ->get();


    }
}
