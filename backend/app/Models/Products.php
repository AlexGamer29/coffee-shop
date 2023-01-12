<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Products extends Model
{
    use HasFactory;
    protected $table = 'products';

    protected $fillable = [
        'categoryId',
        'subCategoryId',
        'name',
        'price',
    ];

    /**
     * Get the user associated with the Products
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
}
