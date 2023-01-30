<?php

namespace App\Support\Traits;

use Illuminate\Database\Eloquent\Builder;

/**
 * Trait EcsFilterable
 * @package App\Support\Traits
 */
trait Searchable
{
    /**
     * @param \Illuminate\Database\Eloquent\Builder $builder
     * @param mixed $search
     * @param mixed $data
     * @param string $mode
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch(Builder $builder, $search, $data, $mode = 'explode'): Builder
    {
        if ($mode === 'explode') {
            $searchParts = explode(' ', $search);
        } else {
            $searchParts = str_getcsv($search, " ");
        }

        foreach ($searchParts as $part) {
            $builder->where(function ($query) use ($part, $data) {
                foreach ($data as $column) {
                    $query->orWhere($column, 'like', '%' . $part . '%');
                }
            });
        }

        return $builder;
    }
}
