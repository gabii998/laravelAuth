<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuenta extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecha',
        'monto',
        'tipo',
        'descripcion',
        'forma',
        'fechaPendiente',
        'compraId',
        'ventaId',
        'estado'
    ];

    public function compra()
    {
        return $this->hasOne(Compra::class, "compraId", "compraId");
    }
    public function venta()
    {
        return $this->hasOne(Venta::class, "ventaId", "ventaId");
    }
}