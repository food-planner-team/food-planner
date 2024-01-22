<?php

namespace App\Notifications;

use App\Models\Product;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class ProductStatusChangedNotification extends Notification implements ShouldBroadcast
{
    /**
     * @param Product $product
     */
    private $message;
    private $product;

    public function __construct(Product $product, string $message)
    {
        $this->product = $product;
        $this->message = $message;
    }

    public function via($notifiable)
    {
        return ['broadcast', 'database'];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'data' => json_encode([
                'message' => $this->message,
                'product' => $this->product,
                'new_status' => $this->product->status
            ]),
            'read_at' => null,
            'notifiable_type' => 'App\Models\User',
            'notifiable_id' => $notifiable->id,
            'type' => 'App\Notifications\ProductStatusChangedNotification'
        ]);
    }

    public function toDatabase($notifiable)
    {
        return [
            'message' => $this->message,
            'product' => $this->product,
        ];
    }
}
