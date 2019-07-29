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
            ->orderBy('comments_count', 'desc')
            ->take(5)
            ->get();

        return response(['articles' => $articles], 200);
    }
}
