<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

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
            'cantidad' => 'required',
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
        $producto = Producto::find($id);
        $producto->nombre = $request['nombre'];
        $producto->cantidad = $request['cantidad'];
        $producto->unidad = $request['unidad'];
        $producto->precioVenta = $request['precioVenta'];
        $producto->insumos()->detach();

        $producto->insumos()->sync($request['insumos']);
        $producto->save();

        return response()->json([
            'message' => 'update successful'
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
        //
    }
}