<?php

namespace App\Http\Controllers;

use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\User;
use Illuminate\Foundation\Auth\User as AuthUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();
        $user = $this->create($request->all());
        $this->guard()->login($user);
        return response()->json([
            'user' => $user,
            'message' => 'registration successful'
        ], 200);
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            //'password' => ['required', 'string', 'min:4', 'confirmed'],
            // NO PASSWORD CONFIRMATION
            'password' => ['required', 'string', 'min:4'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return ModelsUser::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
    protected function guard()
    {
        return Auth::guard();
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $authuser = auth()->user();
            return response()->json([
                'message' => 'Login successful',
                'email' => auth()->user()['email'],
                'tipo' => Auth::user()->tipo,
                'id' => auth()->user()['id']
            ], 200);
        } else {
            return response()->json(['message' => 'Email o contraseña invalida'], 401);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out'], 200);
    }

    public function editar(Request $request, $id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }

        $user = ModelsUser::find($id);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->tipo = $request['tipo'];
        if (isset($request['password']) && $request['password'] != '') {
            $user->password = Hash::make($request['password']);
        }
        $user->save();

        return response()->json([
            'message' => 'update successful',
            'data' => $user
        ], 200);
    }

    public function destroy($id)
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        $cliente = ModelsUser::find($id);
        if ($cliente) {
            ModelsUser::destroy($id);
        } else {
            return response()->json([
                'message' => 'Usuario no encontrado'
            ], 200);
        }


        return response()->json([
            'message' => 'Usuario eliminado correctamente'
        ], 200);
    }

    public function store(Request $request)
    {
        $this->create($request->all());
        return response()->json([
            'message' => 'Usuario creado correctamente'
        ], 200);
    }

    public function listar()
    {
        if (Auth::user()->tipo != "root") {
            return response()->json([
                'message' => 'No se autorizo la operacion'
            ], 200);
        }
        return response(ModelsUser::all(['name', 'email', 'tipo', 'id']));
    }
}