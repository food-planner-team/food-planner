<?php

namespace App\Http\Controllers\v1;

use App\Enum\ProductStatusEnum;
use App\Enum\RecipeStatusEnum;
use App\Http\Requests\UpdateStatusProductRequest;
use App\Models\Product;
use App\Models\Recipe;
use App\Models\RecipeUser;
use App\Models\User;
use App\Transformers\ProductTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StatisticsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function __invoke(Request $request)
    {
        $countAcceptedProducts = Product::where('status', ProductStatusEnum::ACCEPTED)->count();
        $countAcceptedRecipes = Recipe::where('status', RecipeStatusEnum::ACCEPTED)->count();
        $countUser = User::all()->count();
        $countUseRecipesCurrentMonth = RecipeUser::whereMonth('date', date('m'))->count();
        $data = [
            'countAcceptedProducts' => $countAcceptedProducts,
            'countAcceptedRecipes' => $countAcceptedRecipes,
            'countUser' => $countUser,
            'countUseRecipesCurrentMonth' => $countUseRecipesCurrentMonth
        ];
        dd($data);

        return $this->fractal
            ->item($product, new ProductTransformer())
            ->get();
    }
}
