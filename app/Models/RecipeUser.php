<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RecipeUser extends Pivot
{
    protected $dateFormat = 'd-m-Y';
}
