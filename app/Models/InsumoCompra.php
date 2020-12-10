<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InsumoCompra extends Model
{
    use HasFactory;

    protected $fillable = [
        'insumoId', 'compraId', 'cantidad', 'precio'
    ];

    protected $table = 'insumo_compra';

    public function compra()
    {
        return $this->hasOne(Compra::class, "compraId", "compraId");
    }

    public function insumo()
    {
        return $this->hasOne(Insumo::class, "insumoId", "insumoId", "insumoId");
    }
}