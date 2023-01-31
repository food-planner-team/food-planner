<?php

namespace App\Http\Controllers\v1\Auth;

use App\Http\Controllers\v1\ApiController;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends ApiController
{


    public function __invoke(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed'
        ]);
        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password'])
        ]);

        if ($user) {
            return new JsonResponse([
                'message' => 'User created successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
        }
        return new JsonResponse([
            'message' => 'Sorry, something went wrong'
        ], 500);
    }
}
