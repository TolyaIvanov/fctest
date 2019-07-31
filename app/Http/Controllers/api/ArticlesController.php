<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Article;

class ArticlesController extends Controller
{
    public function top(Request $request)
    {
        $articles = Article::withCount('comments')
            ->with('author')
            ->orderBy('comments_count', 'desc')
            ->take(5)
            ->get();


        return response(['articles' => $articles], 200);
    }

    public function get(Request $request, $id)
    {
        $article = Article::with('author')
            ->with('comments')
            ->find($id);

        if ($article) {
            return response($article, 200);
        } else {
            return response('error', 422);
        }
    }

    public function last(Request $request)
    {
        $part = $request->load_param;

        $articles = Article::orderBy('id', 'desc')
            ->with('author')
            ->skip($part * 6)
            ->take(6)
            ->get();

        return response($articles, 200);
    }
}
