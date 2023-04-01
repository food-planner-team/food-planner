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
            $table->unsignedInteger('main_product_id')->nullable();
            $table->string('name');
            $table->string('brand_name');
            $table->string('category_name');
            $table->string('sku')->nullable();
            $table->double('price');
            $table->double('quantity');
            $table->string('quantity_type');
            $table->string('external_id');
            $table->string('provider');
            $table->smallInteger('order')->nullable();
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
