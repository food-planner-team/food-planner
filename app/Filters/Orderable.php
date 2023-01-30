<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

trait Orderable
{
    /**
     * @param string $key
     * @return string
     */
    public static function getColumn(string $key): string
    {
        $info = explode('.', $key);

        if (count($info) === 2) {
            return $info[1];
        }

        return $info[0];
    }

    /**
     * @param string $key
     * @return null|string
     */
    public static function getTable(string $key): ?string
    {
        $info = explode('.', $key);

        if (count($info) === 2) {
            return $info[0];
        }

        return null;
    }

    /**
     * @param Builder $query
     * @param string $column
     * @param string $direction
     * @param array $map
     * @return Builder
     */
    public static function orderBy(Builder $query, string $column, string $direction, array $map = [])
    {
        $table = self::getTable($column);
        $column = self::getColumn($column);

        if ($table) {
            if (! isset($map[$table]) || ! $column) {
                return $query;
            }

            $orderableItem = new $map[$table];

            return method_exists($orderableItem, 'getRelatedTable1') ? $query
                ->leftJoin(\DB::raw("(select id,{$orderableItem->getForeignKey1()}, $column as tc1 from {$orderableItem->getRelatedTable1()}) tt1"), "tt.{$orderableItem->getForeignKey1()}", '=', 'tt1.id')
                ->orderBy("tt1.tc1", $direction) : $query
                ->leftJoin(\DB::raw("(select id as rip, $column as tc from {$orderableItem->getRelatedTable()}) tt"),
                    "{$orderableItem->getTable()}.{$orderableItem->getForeignKey()}", '=', 'tt.rip')
                ->orderBy("tt.tc", $direction);

        }

        return $query->orderBy($column, $direction);
    }
}
