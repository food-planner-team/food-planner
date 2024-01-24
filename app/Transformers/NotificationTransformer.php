<?php

namespace App\Transformers;

use App\Models\Notification;
use League\Fractal\TransformerAbstract;

class NotificationTransformer extends TransformerAbstract
{
    /** @var array */
    protected array $availableIncludes = [];

    public function transform(Notification $notification): array
    {
        return [
            'id' => $notification->id,
            'type' => $notification->type,
            'notifiable_type' => $notification->notifiable_type,
            'notifiable_id' => $notification->notifiable_id,
            'data' => $notification->data,
            'read_at' => $notification->read_at ? $notification->read_at->format('Y-m-d H:i:s') : null,
        ];
    }

}
