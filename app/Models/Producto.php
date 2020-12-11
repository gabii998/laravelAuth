<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $primaryKey = 'productoId';

    protected $fillable = [
        'nombre', 'cantidad', 'precioVenta', 'costo'
    ];
    protected $hidden = ['pivot'];

    public function insumos()
    {
        return $this->belongsToMany(Insumo::class)->withPivot('cantidadUsada')->withTimestamps();
    }
}