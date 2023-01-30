<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request): JsonResource
    {
        if (Auth::attempt($request->all())) {
            $request->session()->regenerate();
            return new UserResource(Auth::user());
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
}
