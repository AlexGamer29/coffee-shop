<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = SubCategory::all();
        return $category->toArray();
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
            'name' => 'required',
            'categoryId' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Sub-category create fails",
            ]);
        }
        $subCategory = SubCategory::create($input);
        return response()->json([
            "success" => true,
            "message" => "Sub-category created successfully.",
            "data" => $subCategory
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
        $subCategory = SubCategory::find($id);
        if (is_null($subCategory)) {
            return response()->json([
                "success" => false,
                "message" => "Sub-category not found.",
            ]);
        }
        return response()->json([
            "success" => true,
            "message" => "Sub-category retrieved successfully.",
            "data" => $subCategory
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
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Sub-category update fails.",
            ]);
        }

        $subCategory = SubCategory::find($id);
        $subCategory->update($request->all());

        return response()->json([
            "success" => true,
            "message" => "Sub-category updated successfully.",
            "data" => $subCategory
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
        $subCategory = SubCategory::find($id);
        $subCategoryName = $subCategory["name"];
        $subCategory->delete();
        return response()->json([
            "success" => true,
            "message" => "Category $subCategoryName deleted successfully.",
        ]);
    }
}
