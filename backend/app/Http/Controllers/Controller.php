<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function getCategory()
    {
        $category = Products::find(2)->ProductsHasOneCategory->get();
        return $category->toArray();
    }

    public function getProductInCategory()
    {
        $product = Category::find(1)->get();
        return $product->toArray();
    }
}
