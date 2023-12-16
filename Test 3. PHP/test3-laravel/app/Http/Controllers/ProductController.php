<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    protected $apiBaseUrl = 'https://dummyjson.com/products';

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = Http::withOptions([
            'verify' => false
        ])->get($this->apiBaseUrl);
        
        $products = $response->json();
        return $products;
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }
}
