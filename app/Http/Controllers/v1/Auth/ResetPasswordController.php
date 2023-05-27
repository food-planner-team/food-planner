<?php

namespace App\Http\Controllers\v1\Auth;

use App\Http\Controllers\v1\ApiController;
use App\Http\Requests\ResetPasswordRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends ApiController
{
    public function __invoke(ResetPasswordRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password', 'token');

        $updatePassword = DB::table('password_resets')
            ->where([
                'email' => $request->get('email'),
                'token' => $request->get('token')
            ])
            ->first();

        if (!$updatePassword) {
            return response()->json(['message' => 'Unable to reset the password.'], 500);
        }
        $user = User::where('email', $request->get('email'))
            ->update(['password' => Hash::make($request->get('password'))]);

        DB::table('password_resets')->where(['email' => $request->get('email')])->delete();

        return response()->json(['message' => 'Password has been reset successfully.']);
    }
}
