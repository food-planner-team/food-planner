<?php

namespace App\Http\Controllers\v1;

use App\Factories\ImageFactory;
use App\Models\User;
use App\Transformers\RecipeTransformer;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $user = $request->user();

        return $this->fractal
            ->parseIncludes("image")
            ->item($user, new UserTransformer())
            ->get();
    }

}
