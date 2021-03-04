<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCajasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cajas', function (Blueprint $table) {
            $table->bigIncrements('cajaId');
            $table->double('monto');
            $table->string('descripcion');
            $table->date('fecha');
            $table->enum('tipo', ['Compra', 'Venta', 'Ingreso', 'Egreso']);
            $table->bigInteger('compraId')->unsigned()->nullable();
            $table->bigInteger('ventaId')->unsigned()->nullable();
            $table->foreign('compraId')->references('compraId')->on('compras');
            $table->foreign('ventaId')->references('ventaId')->on('ventas');
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
        Schema::dropIfExists('cajas');
    }
}