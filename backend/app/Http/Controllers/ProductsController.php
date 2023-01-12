<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Products::all();
        return $products->toArray();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'categoryId' => 'required',
            'subCategoryId' => 'required',
            'name' => 'required',
            'price' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Products create fails",
            ]);
        }
        $products = Products::create($input);
        return response()->json([
            "success" => true,
            "message" => "Products created successfully.",
            "data" => $products
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $products = Products::find($id);
        if (is_null($products)) {
            return response()->json([
                "success" => false,
                "message" => "Products not found.",
            ]);
        }
        return response()->json([
            "success" => true,
            "message" => "Products retrieved successfully.",
            "data" => $products
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'categoryId' => 'required',
            'subCategoryId' => 'required',
            'name' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Products update fails.",
            ]);
        }

        $products = Products::find($id);
        $products->update($request->all());

        return response()->json([
            "success" => true,
            "message" => "Products updated successfully.",
            "data" => $products
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $products = Products::find($id);
        $productName = $products["name"];
        $products->delete();
        return response()->json([
            "success" => true,
            "message" => "Products $productName deleted successfully.",
        ]);
    }
}
