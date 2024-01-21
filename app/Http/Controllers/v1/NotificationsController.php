<?php

namespace App\Http\Controllers\v1;

use App\Models\Notification;
use App\Transformers\NotificationTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class NotificationsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {

        $limit = Arr::get($request->all(), 'limit', 12);
        $notifications = Notification::filter()->paginate($limit);

        return $this->fractal
            ->paginate($notifications, new NotificationTransformer())
            ->get();

    }
}
