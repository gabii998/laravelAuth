<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClienteController extends Controller
{
    //
    public function listar(Request $request)
    {
        return response(Clientes::all());
    }

    public function eliminar(Request $request, $id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = Clientes::find($id);
        if ($cliente) {
            Clientes::destroy($id);
        } else {
            return response()->json([
                'message' => 'Cliente no encontrado'
            ], 200);
        }


        return response()->json([
            'message' => 'Cliente eliminado correctamente'
        ], 200);
    }

    public function crear(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'ubicacion' => 'required',
            'mail' => 'required',
            'telefono' => 'required'
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
            'mail' => 'required',
            'telefono' => 'required'
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
        $cliente->telefono = $request['telefono'];
        $cliente->save();
        return response()->json([
            'message' => 'update successful'
        ], 200);
    }
}