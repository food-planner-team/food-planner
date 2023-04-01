<?php
namespace App\Http\Controllers\v1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{


    public function __invoke(LoginRequest $request): JsonResponse
    {
        if(Auth::attempt($request->validationData())){
            return new JsonResponse([
                'token' => $request->user()->createToken("API TOKEN")->plainTextToken
            ], 200);
        }
        return new JsonResponse([
            'message' => 'Email & Password does not match with our record.',
        ], 401);

    }
}
