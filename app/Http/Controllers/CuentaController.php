<?php

namespace App\Http\Controllers;

use App\Models\Compra;
use App\Models\Cuenta;
use App\Models\Venta;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CuentaController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        //Se modifica el original, 
        //y si queda saldo pendiente, se crea otro item mas


        $cuenta = Cuenta::find($id);
        //$nuevoItem = $cuenta;



        if ($cuenta) {
            //var_dump($cliente);
            // if ($cuenta['estado'] == "Impago") {
            //     $cuenta['estado'] = "Pago";
            //     $cuenta->save();
            // }

            if ($request['monto'] < $cuenta['monto']) {
                $cuenta['estado'] = "Pago";
                //Aca se crea otro item por la diferencia
                $monto = $cuenta['monto'] - $request['monto'];

                $nuevaCuenta = Cuenta::create([
                    'fecha' => date('Y-m-d'),
                    'estado' => "Impago",
                    'ventaId' => $cuenta['ventaId'],
                    'tipo' => $cuenta['tipo'],
                    'descripcion' => "Saldo pendiente(" . $cuenta['descripcion'] . ")",
                    'forma' => "Saldo pendiente",
                    'monto' => $monto
                ]);
            }
            $cuenta['fecha'] = date('Y-m-d');
            $cuenta['forma'] = $request['forma'];
            $cuenta->save();
        } else {
            return response()->json([
                'message' => 'Item de la cuenta no encontrado'
            ], 200);
        }


        return response()->json([
            'message' =>
            'Item de la cuenta eliminada correctamente',
            "monto" => $request['monto']
        ], 200);
    }
    public function pendientesPago()
    {
        return response()->json(['message' => null, 'data' => Cuenta::with([])->where('forma', '=', 'cuenta')->where('tipo', '=', 'Egreso')->whereDate('fechaPendiente', '>=', Carbon::now()->subDays(3))->orderBy('fecha', 'DESC')->get()], 200);
    }

    public function index()
    {
        return response()->json(['message' => null, 'data' => Cuenta::with(['compra', 'venta', 'venta.cliente', 'compra.insumos', 'compra.proveedor', 'compra.insumos.insumo', 'venta.productoVenta', 'venta.productoVenta.producto'])->orderBy('fecha', 'DESC')->get()], 200);
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
            "fecha" => "required",
            "monto" => "required",
            "tipo" => "required",
            "descripcion" => "required",
            "forma" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $cuenta = Cuenta::create($request->all());

        if ($request['forma'] == 'cuenta') {
            $cuenta['estado'] = "Impago";
        } else {
            $cuenta['estado'] = "Pago";
        }

        $cuenta->save();

        return response()->json([
            'message' => 'registration successful'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function show(Cuenta $cuenta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function edit(Cuenta $cuenta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, Cuenta $cuenta)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = Cuenta::find($id);
        if ($cliente) {
            //var_dump($cliente);
            if ($cliente['compraId'] != null) {
                Compra::destroy($cliente['compraId']);
            }
            if ($cliente['ventaId'] != null) {
                Venta::destroy($cliente['ventaId']);
            }

            Cuenta::destroy($id);
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
}