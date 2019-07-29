<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Comment;

class CommentsController extends Controller
{
    public function last(Request $request)
    {
        $comments = Comment::orderBy('id', 'desc')->take(5)->get();

        return response(['comments' => $comments], 200);
    }
}
