<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    use HasFactory;
    protected $table = 'proveedores';
    protected $primaryKey = 'proveedorId';
    protected $fillable = [
        'nombre', 'telefono', 'email', 'saldo'
    ];

    public function insumos()
    {
        return $this->hasMany('App\Insumo');
    }
}