<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
    public function top(Request $request)
    {
        $users = User::withCount('comments')
            ->orderBy('comments_count', 'desc')
            ->take(5)
            ->get();

        return response(['users' => $users], 200);
    }
}
