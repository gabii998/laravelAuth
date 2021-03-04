<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    use HasFactory;
    protected $table = 'cajas';
    public $timestamps = true;

    protected $casts = [
        //'cost' => 'float'
    ];

    protected $fillable = [
        'fecha',
        'descripcion',
        'tipo',
        'monto'
    ];
}