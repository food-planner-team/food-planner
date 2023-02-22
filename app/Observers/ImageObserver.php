<?php

namespace App\Observers;

use App\Models\Image;
use Ramsey\Uuid\Uuid;

class ImageObserver
{
    /**
     * Stuff needs to be done while model is creating
     *
     * @param Image $image
     */
    public function creating(Image $image)
    {
        if (! $image->id) {
            $image->id = Uuid::uuid4()->toString();
        }
    }
}
