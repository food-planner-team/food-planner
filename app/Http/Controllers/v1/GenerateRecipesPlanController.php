<?php

namespace App\Http\Controllers\v1;

use App\Http\Requests\GenerateRecipesPlanRequest;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Barryvdh\DomPDF\Facade\Pdf;

class GenerateRecipesPlanController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function __invoke(GenerateRecipesPlanRequest $request): Response
    {

        $dateStart = $request->get('date_start');
        $dateStartName = Carbon::create($dateStart)->locale('pl')->isoFormat('D MMMM');

        $dateEnd = $request->get('date_end');
        $dateSEndName = Carbon::create($dateEnd)->locale('pl')->isoFormat('D MMMM');

        $user = $request->user();
        $userRecipes = $user->recipes()
            ->where('date', '>=', $dateStart)
            ->where('date', '<=', $dateEnd)
            ->get();
        $dates = $userRecipes->pluck('pivot.date')->unique()->sort();
        $recipes = [];
        foreach ($dates as $date) {
            $items = $userRecipes->where('pivot.date', $date)->sortBy('pivot.order');
            $dateName = Carbon::create($date)->locale('pl')->isoFormat('dddd, D MMMM');
            $recipes[$dateName] = $items;
        }

        view()->share('header', $dateStartName . " - " . $dateSEndName);
        view()->share('recipes', $recipes);
        $pdf = PDF::loadView('recipesPlan', $recipes);
        return $pdf->download('pdf_file.pdf');
    }
}
