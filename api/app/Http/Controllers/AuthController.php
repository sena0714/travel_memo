<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\User\UserRegisterRequest;
use App\Http\Resources\UserIdResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResource
    {
        if (Auth::attempt($request->all())) {
            $request->session()->regenerate();
            return new UserIdResource(Auth::user());
        }

        throw ValidationException::withMessages([
            'loginFailed' => 'IDまたはパスワードが間違っています。'
        ]);
    }

    public function logged_in() {
        if (!Auth::user()) {
            return response()->json(false);
        }

        return response()->json(true);
    }

    public function register(UserRegisterRequest $request) {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return new UserIdResource(Auth::user());
        }

        throw ValidationException::withMessages([
            'userRegisterFailed' => 'ユーザーの作成に失敗しました。'
        ]);
    }
}