<?php

namespace App\Http\Controllers;

use App\Models\Insumo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class InsumoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $insumo = Insumo::get();
        return response()->json(['message' => null, 'data' => $insumo], 200);
    }

    public function alerta()
    {
        return ['data' => Insumo::with([])->where('cantidad', '<=', '10')->get()];
    }

    public function find($id)
    {
        $insumo = Insumo::get();
        $filtrado = $insumo->where('proveedorId', $id)->toArray();
        return response()->json(['message' => null, 'data' => array_values($filtrado)], 200);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(), [
            'nombre' => 'required',
            'cantidad' => 'required',
            'costo' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $insumo = Insumo::create($request->all());
        //$insumo->proveedor()->sync($request['proveedorId']);
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
    public function edit($id)
    {
        //
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
        $insumo = Insumo::find($id);
        $insumo->nombre = $request['nombre'];
        $insumo->cantidad = $request['cantidad'];
        $insumo->unidad = $request['unidad'];
        $insumo->costo = $request['costo'];
        $insumo->save();
        return response()->json([
            'message' => 'update successful'
        ], 200);
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
        $cliente = Insumo::find($id);
        if ($cliente) {
            Insumo::destroy($id);
        } else {
            return response()->json([
                'message' => 'Insumo no encontrado'
            ], 200);
        }


        return response()->json([
            'message' => 'Insumo eliminado correctamente'
        ], 200);
    }
}