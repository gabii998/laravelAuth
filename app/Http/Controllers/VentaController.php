<?php

namespace App\Http\Controllers;

use App\Models\Venta;
use App\Models\Clientes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VentaController extends Controller
{
    //
    public function index()
    {
        return response()->json(['data' => Venta::with(["cliente", "productos"])->get()]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(), [
            'fecha' => 'required',
            'total' => 'required',
            'venta_clienteId' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $venta = Venta::create([
            "fecha" => $request["fecha"],
            "total" => $request['total'],
            "venta_clienteId" => $request['venta_clienteId']
        ]);
        $venta->productos()->sync($request['productos']);

        //$cliente = Clientes::find($request['clienteId']);

        //$venta->cliente()->save($cliente);
        return response()->json([
            'message' => 'registration successful'
        ], 200);
    }
}