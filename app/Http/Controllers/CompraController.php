<?php

namespace App\Http\Controllers;

use App\Models\Compra;
use App\Models\InsumoCompra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CompraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data' => Compra::with(["insumos", "insumos.insumo", "insumos.insumo.proveedor"])->get()]);
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
            'fecha' => 'required',
            'total' => 'required',
            'compra_proveedorId' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $compra = Compra::create([
            "fecha" => $request["fecha"],
            "total" => $request['total'],
            "compra_proveedorId" => $request['compra_proveedorId']
        ]);
        //$insumos = array();
        foreach ($request['insumos'] as $insumo) {
            $insumo['precio'] = $insumo['costo'];
            unset($insumo['costo']);
            unset($insumo['nombre']);
            unset($insumo['proveedorId']);
            unset($insumo['unidad']);
            unset($insumo['created_at']);
            unset($insumo['updated_at']);
            $insumo['compraId'] = $compra['compraId'];
            InsumoCompra::create($insumo);

            //array_push($insumos, $insumo);
        }


        //$compra->insumos()->sync($insumos);
        return response()->json([
            'message' => 'registration successful'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function show(Compra $compra)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function edit(Compra $compra)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Compra $compra)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function destroy(Compra $compra)
    {
        //
    }
}