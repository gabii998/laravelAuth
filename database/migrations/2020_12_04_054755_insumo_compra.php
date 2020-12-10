<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsumoCompra extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insumo_compra', function (Blueprint $table) {
            $table->primary(['insumoId', 'compraId']);
            $table->bigInteger('insumoId')->unsigned();
            $table->bigInteger('compraId')->unsigned();
            $table->integer('cantidad');
            $table->double('precio');
            $table->timestamps();

            $table->foreign('insumoId')
                ->references('insumoId')
                ->on('insumos');

            $table->foreign('compraId')
                ->references('compraId')
                ->on('compras');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}