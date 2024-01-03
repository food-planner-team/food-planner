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
        DB::beginTransaction();
        try {
            if ($request->has('image')) {
                $image = new ImageFactory('images/users/', $request->file('image'), $user, 'public');
                $image->update($user->image);
            }
            unset($request['role']);
            $user->update($request->all());

            DB::commit();
            return $this->fractal
                ->parseIncludes("image")
                ->item($user, new UserTransformer())
                ->get();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error in file: ' . $e->getFile() . ', line: ' . $e->getLine() . '\nMessage: ' . $e->getMessage());
            return $this->respondUnprocessable();
        }

    }

    public function show(User $user)
    {
        return $this->fractal
            ->item($user, new UserTransformer())
            ->get();
    }

    public function destroy(User $user)
    {
        $user->delete();
        return $this->respondOK();
    }
}
