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
    public function index(Request $request, $search = null)
    {
        $apiUrl = $this->apiBaseUrl;

        if ($search && $request->has('q')) {
            $query = $request->input('q');
            $apiUrl .= '/search?q=' . urlencode($query);
        }
      
        try {
            $response = Http::withOptions([
                'verify' => false
            ])->get($apiUrl);
            
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al obtener los productos'], 500);
        }
        
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
    public function show($id)
    {
        $apiUrl = $this->apiBaseUrl . '/' . $id;

        $response = Http::withOptions([
            'verify' => false
        ])->get($apiUrl);
     
        $product = $response->json();
     
        return $product;
    }
}
