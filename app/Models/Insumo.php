<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Insumo extends Model
{
    use HasFactory;
    protected $table = 'insumos';
    protected $primaryKey = 'insumoId';

    protected $fillable = [
        'nombre', 'cantidad', 'costo', 'proveedorId'
    ];

    public function proveedor()
    {
        return $this->belongsTo(Proveedor::class, "proveedorId", "proveedorId");
    }
    public function compras()
    {
        return $this->belongsToMany(Compra::class, "insumo_compra", "insumoId");
    }
}