<?php

namespace App\Http\Controllers;

use App\Models\Caja;
use App\Models\Compra;
use App\Models\Cuenta;
use App\Models\Venta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CajaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($fecha)
    {
        return response()->json(["data" => Caja::with(['compra', 'venta', 'venta.cliente', 'compra.insumos', 'compra.proveedor', 'compra.insumos.insumo', 'venta.productoVenta', 'venta.productoVenta.producto'])->where("fecha","=",$fecha)->orderBy('fecha', 'DESC')->get()]);
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
        $cuenta = Caja::create([
            "fecha" => $request["fecha"],
            "monto" => $request["monto"],
            "tipo" => "Egreso",
            "descripcion" => $request['descripcion'],
            "forma" => $request['formaPago'],

        ]);



        //$compra->insumos()->sync($insumos);
        return response()->json([
            'message' => 'Item guardado exitosamente!'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Caja  $caja
     * @return \Illuminate\Http\Response
     */
    public function show(Caja $caja)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Caja  $caja
     * @return \Illuminate\Http\Response
     */
    public function edit(Caja $caja)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Caja  $caja
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Caja $caja)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Caja  $caja
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = Caja::find($id);
        if ($cliente) {
            //var_dump($cliente);
            if ($cliente['compraId'] != null) {
                Compra::destroy($cliente['compraId']);
            }
            if ($cliente['ventaId'] != null) {
                Venta::destroy($cliente['ventaId']);
            }

            Caja::destroy($id);
        } else {
            return response()->json([
                'message' => 'Item de la cuenta no encontrado'
            ], 200);
        }


        return response()->json([
            'message' =>
            'Item de la cuenta eliminada correctamente',
            'data' => $cliente
        ], 200);
    }

    public function getBalance(Request $request){
        $total=0;
        $ingresos=0;
        $egresos=0;
        $items = Caja::with(['compra', 'venta', 'venta.cliente', 'compra.insumos', 'compra.proveedor', 'compra.insumos.insumo', 'venta.productoVenta', 'venta.productoVenta.producto'])->orderBy('fecha', 'DESC')->get();

        foreach ($items as $item) {
            if($item['fecha'] == $request['periodo']){
                if($item['tipo'] == "Ingreso"){
                    $ingresos = $ingresos + $item['monto'];
                }else if($item['tipo'] == "Egreso"){
                    $egresos = $egresos + $item['monto'];
                }
            } 
        }
        $total = $ingresos - $egresos;
        return response()->json(['balance'=>$total]);
    }

}