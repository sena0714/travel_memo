<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    public function fetch(): AnonymousResourceCollection {
        $users = User::all();
        return UserResource::collection($users);
    }
}
