<?php

namespace App\Http\Controllers\v1\Auth;

use App\Http\Controllers\v1\ApiController;
use App\Http\Requests\SendResetPasswordRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;

class SendResetPasswordController extends ApiController
{


    public function __invoke(SendResetPasswordRequest $request): JsonResponse
    {

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return new JsonResponse([
                'message' => 'User not found',
            ], 404);
        }

        $token = Password::createToken($user);

        if (!$token) {
            return new JsonResponse([
                'message' => 'Failed to create password reset token',
            ], 500);
        }

        $user->sendPasswordResetNotification($token);

        return new JsonResponse([
            'message' => 'Password reset link sent successfully',
        ], 200);
    }
}
