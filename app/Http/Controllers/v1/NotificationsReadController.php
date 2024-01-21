<?php

namespace App\Http\Controllers\v1;

use App\Models\Notification;
use App\Transformers\NotificationTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class NotificationsReadController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */
    public function __invoke(Request $request)
    {
        $ids = $request->get('ids');
        if (count($ids) > !0) {
            return $this->respondUnprocessable();
        }
        Notification::whereIn('id', $ids)->update(['read_at' => now()]);

        return $this->respondOK();
    }
}
