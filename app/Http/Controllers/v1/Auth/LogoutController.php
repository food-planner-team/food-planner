<?php
namespace App\Http\Controllers\v1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{

    public function __invoke(Request $request): JsonResponse
    {
        Auth::logout();
        return new JsonResponse([
            'message' => "Successfully logged out"
        ], 200);
    }
}
