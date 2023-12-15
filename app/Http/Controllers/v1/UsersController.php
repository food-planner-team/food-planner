<?php

namespace App\Http\Controllers\v1;

use App\Models\User;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UsersController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = Arr::get($request->all(), 'limit', 15);
        $users = User::filter()->paginate($limit);

        return $this->fractal
            ->paginate($users, new UserTransformer())
            ->get();
    }

    public function update(Request $request, User $user)
    {
        unset($request['role']);
        $user->update($request->all());

        return $this->fractal
            ->item($user, new UserTransformer())
            ->get();
    }

    public function show(User $user)
    {
        return $this->fractal
            ->item($user, new UserTransformer())
            ->get();
    }

    public function delete(User $user)
    {
        $user->delete();
        return $this->respondOK();
    }
}
