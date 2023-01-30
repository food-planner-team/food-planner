<?php
namespace App\Http\Controllers\v1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{


    public function __invoke(Request $request): JsonResponse
    {
        $credentials  = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);
        if(Auth::attempt($credentials)){
            return new JsonResponse([
                'token' => $request->user()->createToken("API TOKEN")->plainTextToken
            ], 200);
        }
        return new JsonResponse([
            'message' => 'Email & Password does not match with our record.',
        ], 401);

    }
}
