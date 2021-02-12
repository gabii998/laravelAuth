<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecha', 'venta_clienteId', 'total'
    ];
    protected $primaryKey = 'ventaId';
    protected $table = "ventas";

    public function cliente()
    {
        return $this->hasOne(Clientes::class, "id", "venta_clienteId");
    }
    public function productos()
    {
        return $this->belongsToMany(Producto::class, "producto_venta")->withTimestamps();
    }
    public function productoVenta()
    {
        return $this->hasMany(ProductoVenta::class);
    }
}