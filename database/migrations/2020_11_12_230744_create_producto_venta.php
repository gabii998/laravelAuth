<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductoVenta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producto_venta', function (Blueprint $table) {
            $table->primary(['producto_productoId', 'venta_ventaId']);
            $table->bigInteger('producto_productoId')->unsigned();
            $table->bigInteger('venta_ventaId')->unsigned();
            $table->integer('cantidad');
            $table->double('precio');
            $table->timestamps();
            $table->foreign('producto_productoId')
                ->references('productoId')
                ->on('productos');
            $table->foreign('venta_ventaId')
                ->references('ventaId')
                ->on('ventas');
            //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('producto_venta', function (Blueprint $table) {
            //
        });
    }
}