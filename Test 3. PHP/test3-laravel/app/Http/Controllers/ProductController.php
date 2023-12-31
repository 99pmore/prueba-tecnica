<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $search = null)
    {
        $apiUrl = config('services.products_api.base_url');

        if ($search && $request->has('q')) {
            $query = $request->input('q');
            $apiUrl .= '/search?q=' . urlencode($query);
        }
      
        try {
            $response = Http::withOptions([
                'verify' => false
            ])->get($apiUrl);

            $responseData = $response->json();
            $products = $responseData['products'];
          
            if ($request->has('category')) {
                $category = $request->input('category');
                $products = array_filter($products, function ($product) use ($category) {
                    return isset($product['category']) && $product['category'] === $category;
                });
            }

            $productsArray = [];
            foreach ($products as $product) {
                $productsArray[] = $product;
            }     
          
            return $productsArray;
            
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al obtener los productos'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $apiUrl = config('services.products_api.base_url') . '/' . $id;

        try {
            $response = Http::withOptions([
                'verify' => false
            ])->get($apiUrl);
         
            $product = $response->json();
         
            return $product;

        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al obtener los productos'], 500);
        }
    }
}
