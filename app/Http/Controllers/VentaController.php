<?php

namespace App\Http\Controllers;

use App\Models\Caja;
use App\Models\Venta;
use App\Models\Cuenta;
use App\Models\Clientes;
use App\Models\Producto;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class VentaController extends Controller
{
    //
    // public function pendientesCobro()
    // {
    //     return response()->json(['message' => null, 'data' => Cuenta::with(['venta', 'venta.cliente'])->where('forma', '=', 'cuenta')->whereDate('fechaPendiente', '>=', Carbon::now()->subDays(3))->orderBy('fecha', 'DESC')->get()], 200);
    // }
    public function pendientesCobro()
    {
        return response()->json(['message' => null, 'data' => Cuenta::with(['venta', 'venta.cliente'])->where('forma', '=', 'cuenta')->whereDate('fechaPendiente', '>=', Carbon::now()->subDays(3))->orderBy('fecha', 'DESC')->get()], 200);
    }

    public function index()
    {
        return response()->json(['data' => Venta::with(["cliente", "productoVenta", "productoVenta.producto"])->orderBy('fecha', 'DESC')->get()]);
    }
    public function store(Request $request)
    {
        if (!isset($request['formaPago'])) {
            $request['formaPago'] = "efectivo";
        }
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
        $prodsToSync = array();
        foreach ($request['productos'] as $producto) {
            $producto['precio'] = $producto['precioVenta'];
            $producto['producto_productoId'] = $producto['productoId'];
            unset($producto['productoId']);
            unset($producto['precioVenta']);
            unset($producto['insumos']);
            unset($producto['nombre']);
            unset($producto['unidad']);
            array_push($prodsToSync, $producto);
            $storedProd = Producto::find($producto['producto_productoId']);
            $storedProd->cantidad = $storedProd->cantidad - $producto['cantidad'];
            $storedProd->save();
        }

        $venta->productos()->sync($prodsToSync);
        $cliente = Clientes::find($request['venta_clienteId']);
        $nombreCliente = $cliente['nombre'];

        $newDate = date('d-m-Y', strtotime($request["fecha"]));

        //verificar origen, para ver si se guarda en cuenta o en caja
        if ($request['origen'] == 'caja') {
            $caja = Caja::create([
                "fecha" => $request["fecha"],
                "monto" => $request["total"],
                "forma" => "efectivo",
                "tipo" => "Ingreso",
                "descripcion" => "Venta a " . $nombreCliente . " el " . $newDate,
                "ventaId" => $venta->ventaId
            ]);
        } else if ($request['origen'] == 'cuenta') {
            $cuenta = Cuenta::create([
                "fecha" => $request["fecha"],
                "monto" => $request["total"],
                "tipo" => "Ingreso",
                "descripcion" => "Venta a " . $nombreCliente . " el " . $newDate,
                "forma" => $request['formaPago'],
                "ventaId" => $venta->ventaId,
                "fechaPendiente" => $request['fechaPendiente']
            ]);
        }

        //$cliente = Clientes::find($request['clienteId']);

        //$venta->cliente()->save($cliente);
        return response()->json([
            'message' => 'registration successful'
        ], 200);
    }
    public function destroy($id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = Venta::find($id);
        if ($cliente) {
            Venta::destroy($id);
        } else {
            return response()->json([
                'message' => 'Venta no encontrada'
            ], 200);
        }


        return response()->json([
            'message' => 'Venta eliminada correctamente'
        ], 200);
    }
}