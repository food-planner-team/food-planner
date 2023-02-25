<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('parent_id')->nullable();
            $table->string('name');
            $table->string('brand_name')->nullable();
            $table->string('category_name')->nullable();
            $table->string('sku')->nullable();
            $table->double('quantity');
            $table->string('quantity_type');
            $table->unsignedInteger('image_id')->nullable();
            $table->string('external_id')->nullable();
            $table->string('provider')->nullable();
            $table->boolean('is_main')->default(0);
            $table->boolean('is_default')->default(0);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
