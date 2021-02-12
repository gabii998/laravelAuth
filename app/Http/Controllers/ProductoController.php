<?php

namespace App\Http\Controllers;

use App\Models\Insumo;
use App\Models\Producto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Producto::with("insumos:nombre,cantidad,costo")->get()->makeHidden(['created_at', 'updated_at', 'insumos.created_at']);
        return response()->json(['message' => null, 'data' => $productos], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function storeRelation(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make(request()->all(), [
            'nombre' => 'required',

            'precioVenta' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $producto = Producto::create([
            'nombre' => $request['nombre'],
            'cantidad' => $request['cantidad'],
            'unidad' => $request['unidad'],

            'precioVenta' => $request['precioVenta']
        ]);
        //Aca hay que insertar todos los insumos

        $producto->insumos()->sync($request['insumos']);


        return response()->json([
            'message' => 'registration successful'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request $request)
    {
        $user = Auth::user();

        $producto = Producto::find($id);
        $cantidadOriginal = $producto->cantidad;
        if ($producto->cantidad > $request['cantidad'] && $user->tipo != "root") {
            return response()->json([
                'message' => 'La cantidad no puede ser reducida manualmente'
            ], 422);
        }
        $diferenciaCantidad = $request['cantidad'] - $producto->cantidad;
        $temp = $producto->cantidad = $request['cantidad'];
        //$arrayProductos = array();

        $producto->insumos()->detach();
        $producto->insumos()->sync($request['insumos']);



        if ((!isset($request['modificarInsumos']) && $user->tipo != "root") || $request['modificarInsumos'] == true) {
            //Aqui se iteran los insumos para restar su cantidad
            foreach ($request['insumos'] as $insumo) {
                //Podria agregarse una verificacion en la cantidad, pero no lo considero necesario
                $insumoTemp = Insumo::find($insumo['insumo_insumoId']);
                $insumoDb = $producto->insumos()->find($insumo['insumo_insumoId']);
                $nuevaCantidad = $insumoTemp->cantidad - ($diferenciaCantidad * $insumoDb['pivot']['cantidadUsada']);
                $insumoTemp->cantidad = $nuevaCantidad;
                $insumoTemp->save();
            }
        }

        $producto->save();
        return response()->json([
            'message' => 'update successful',
            'user' => Auth::user()
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = Producto::find($id);
        if ($cliente) {
            Producto::destroy($id);
        } else {
            return response()->json([
                'message' => 'Producto no encontrado'
            ], 200);
        }


        return response()->json([
            'message' => 'Producto eliminado correctamente'
        ], 200);
    }
}