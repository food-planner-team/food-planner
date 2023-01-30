<?php

namespace App\Support\Traits;

use App\Filters\RelationFilters;
use Illuminate\Database\Eloquent\Builder;

/**
 * Trait EcsFilterable
 * @package App\Support\Traits
 */
trait Filterable
{
    /**
     * Filter results
     *
     * @param Builder $builder
     * @return Builder
     */
    public function scopeFilter(Builder $builder)
    {
        $builder = $builder->with(app()->make(RelationFilters::class)->applyRelations());

        return app()->make(RelationFilters::class)->apply($builder, class_basename($this));
    }

    /**
     * Filter results
     *
     * @param Builder $builder
     * @return Builder
     */
    public function scopewithFilteredRelations(Builder $builder)
    {
        return $builder->with(app()->make(RelationFilters::class)->applyRelations());
    }

    /**
     * @return mixed
     */
    public function loadFilteredRelations()
    {
        $result = app()->make(RelationFilters::class)->applyRelations();
        $this->load($result);


        return $this;
    }

    /**
     * @return mixed
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function loadFilteredRelationsFromRequest($request)
    {
        $this->load(app()->make(RelationFilters::class)->setRequest($request)->applyRelations());

        return $this;
    }
}
