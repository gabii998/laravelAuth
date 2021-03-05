<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompraYVentaACuenta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("cuentas", function (Blueprint $table) {
            $table->bigInteger('compraId')->unsigned()->nullable();
            $table->bigInteger('ventaId')->unsigned()->nullable();
            $table->foreign('ventaId')
                ->references('ventaId')
                ->on('ventas')->onDelete("cascade");;
            $table->foreign('compraId')
                ->references('compraId')
                ->on('compras')->onDelete("cascade");;
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