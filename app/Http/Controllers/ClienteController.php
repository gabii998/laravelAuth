<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use App\Models\Producto;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    //
    public function listar(Request $request)
    {
        return response(Clientes::all());
    }

    public function crear(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'ubicacion' => 'required',
            'mail' => 'required'
        ]);
        Clientes::create($request->all());
        return response()->json([
            'message' => 'registration successful'
        ], 200);
        //$cliente=
    }
    public function editar(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required',
            'ubicacion' => 'required',
            'mail' => 'required'
        ]);
        Clientes::whereId($id)->update($request->all());
        return response()->json([
            'message' => 'registration successful'
        ], 200);
    }
    public function update(Request $request, $id)
    {
        //
        $cliente = Clientes::find($id);

        $cliente->nombre = $request['nombre'];
        $cliente->ubicacion = $request['ubicacion'];
        $cliente->mail = $request['mail'];
        $cliente->save();
        return response()->json([
            'message' => 'update successful'
        ], 200);
    }
}