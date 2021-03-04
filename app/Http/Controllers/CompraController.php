<?php

namespace App\Http\Controllers;

use App\Models\Caja;
use App\Models\Compra;
use App\Models\Cuenta;
use App\Models\Insumo;
use App\Models\InsumoCompra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        return response()->json(['data' => Compra::with(["insumos", "insumos.insumo", "proveedor"])->orderBy('fecha', 'DESC')->get()]);
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

            $storedInsumo = Insumo::find($insumo['insumoId']);
            $storedInsumo->cantidad = $storedInsumo->cantidad + ((int)$insumo['cantidad']);
            $storedInsumo->save();

            //array_push($insumos, $insumo);
        }
        $newDate = date('d-m-Y', strtotime($request["fecha"]));


        //verificar origen, para ver si se guarda en cuenta o en caja

        if ($request['origen'] == 'caja') {
            $caja = Caja::create([
                "fecha" => $request["fecha"],
                "monto" => $request["total"],
                "forma" => "efectivo",
                "tipo" => "Egreso",
                "descripcion" => "Compra el " . $newDate,
                "compraId" => $compra->compraId,
            ]);
        } else if ($request['origen'] == 'cuenta') {
            $cuenta = Cuenta::create([
                "fecha" => $request["fecha"],
                "monto" => $request["total"],
                "tipo" => "Egreso",
                "descripcion" => "Compra el " . $newDate,
                "forma" => $request['formaPago'],
                "compraId" => $compra->compraId,
                "fechaPendiente" => $request['fechaPendiente']
            ]);
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
    public function destroy($id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = Compra::find($id);
        if ($cliente) {
            Compra::destroy($id);
        } else {
            return response()->json([
                'message' => 'Compra no encontrada'
            ], 200);
        }


        return response()->json([
            'message' => 'Compra eliminada correctamente'
        ], 200);
    }
}