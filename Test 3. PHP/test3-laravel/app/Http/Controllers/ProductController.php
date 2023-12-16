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
        
        $responseData = $response->json();
        $products = $responseData['products'];

        if ($request->has('category')) {
            $category = $request->input('category');
            $products = array_filter($products, function ($product) use ($category) {
                return isset($product['category']) && $product['category'] === $category;
            });
        }

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
