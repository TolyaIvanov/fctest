<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Comment;
use Illuminate\Support\Facades\Validator;

class CommentsController extends Controller
{
    public function last(Request $request)
    {
        $comments = Comment::orderBy('id', 'desc')
            ->with('author')
            ->take(5)
            ->get();

        return response(['comments' => $comments], 200);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'body' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 422);
        }

        $comment = new Comment();

        $comment->body = $request->body;
        $comment->article_id = $request->article_id;
        $comment->author_id = $request->author_id;

        $comment->save();

        return response(['comment' => $comment, 'author' => $comment->author], 200);
    }
}
