<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    use HasFactory;

    protected $fillable = [
        'fecha', 'total', 'compra_proveedorId'
    ];
    protected $primaryKey = 'compraId';

    public function insumos()
    {
        return $this->hasMany(InsumoCompra::class,  "compraId", "compraId");
    }

    public function insumosSelect()
    {
        return $this->hasMany(InsumoCompra::class, "compraId", "compraId");
    }

    public function proveedor()
    {
        return $this->hasOne(Proveedor::class);
    }
}