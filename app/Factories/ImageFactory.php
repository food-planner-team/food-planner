<?php

namespace App\Factories;


use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class ImageFactory
{
//    use NameTrait;
//
    private string $path;
    private string $disk;
    private $image;
    private $model;

//
    public function __construct($path, $image, $model, $disk = null)
    {
        $this->path = $path;
        $this->image = $image;
        $this->model = $model;
        $this->disk = $disk ?? config('filesystems.public');
    }

    public function create()
    {
        $id = Uuid::uuid4()->toString();
        if ($this->image) {
            $path = Storage::disk($this->disk)->putFile($this->path . $id, $this->image);
            $image = Image::create([
                'id' => $id,
                'imageable_id' => $this->model->id,
                'imageable_type' => get_class($this->model),
                'path' => $path,
                'url' => Storage::disk($this->disk)->url($path)
            ]);

            return $image;
        }
    }
}
