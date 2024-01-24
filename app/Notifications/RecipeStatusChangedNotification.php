<?php

namespace App\Notifications;

use App\Models\Recipe;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class RecipeStatusChangedNotification extends Notification implements ShouldBroadcast
{
    /**
     * @param Recipe $recipe
     */
    private $message;
    private $recipe;

    public function __construct(Recipe $recipe, string $message)
    {
        $this->recipe = $recipe;
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
                'recipe' => $this->recipe,
                'new_status' => $this->recipe->status
            ]),
            'read_at' => null,
            'notifiable_type' => 'App\Models\User',
            'notifiable_id' => $notifiable->id,
            'type' => 'App\Notifications\RecipeStatusChangedNotification'
        ]);
    }

    public function toDatabase($notifiable)
    {
        return [
            'message' => $this->message,
            'recipe' => $this->recipe,
        ];
    }
}
