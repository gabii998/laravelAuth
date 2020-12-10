<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsumosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insumos', function (Blueprint $table) {
            $table->bigIncrements('insumoId');
            $table->bigInteger('proveedorId')->unsigned();
            $table->string('nombre');
            $table->string('cantidad');
            $table->string('unidad');
            $table->string('costo');
            $table->timestamps();
            $table->foreign('proveedorId')
                ->references('proveedorId')
                ->on('proveedores')
                ->onCascade('delete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insumos');
    }
}