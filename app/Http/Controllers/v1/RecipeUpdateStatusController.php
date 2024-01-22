<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\UpdateStatusRecipeRequest;
use App\Models\Recipe;
use App\Notifications\RecipeStatusChangedNotification;
use App\Transformers\ProductTransformer;
use App\Transformers\RecipeTransformer;
use Illuminate\Http\Response;

class RecipeUpdateStatusController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function __invoke(UpdateStatusRecipeRequest $request, Recipe $recipe)
    {
        $recipe->update(['status' => $request->get("status")]);
        $recipe->user->notify(new RecipeStatusChangedNotification($recipe, $request->get("message", "Recipe status changed")));
        return $this->fractal
            ->item($recipe, new RecipeTransformer())
            ->get();
    }
}
