<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductoVenta extends Model
{
    use HasFactory;

    protected $table = "producto_venta";


    public function producto()
    {
        return $this->hasOne(Producto::class, "productoId", "producto_productoId");
    }
}