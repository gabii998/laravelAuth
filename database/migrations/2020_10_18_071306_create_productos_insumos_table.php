<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosInsumosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insumo_producto', function (Blueprint $table) {
            $table->primary(['producto_productoId', 'insumo_insumoId']);
            $table->bigInteger('producto_productoId')->unsigned();
            $table->bigInteger('insumo_insumoId')->unsigned();
            $table->string('cantidadUsada');
            $table->timestamps();
            $table->foreign('producto_productoId')
                ->references('productoId')
                ->on('productos');
            $table->foreign('insumo_insumoId')
                ->references('insumoId')
                ->on('insumos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insumo_producto');
    }
}