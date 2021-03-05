<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    use HasFactory;
    protected $table = 'cajas';
    public $timestamps = true;
    protected $primaryKey = 'cajaId';

    protected $casts = [
        //'cost' => 'float'
    ];

    protected $fillable = [
        'fecha',
        'descripcion',
        'tipo',
        'monto',
        'compraId',
        'ventaId'
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