<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class SubCategory extends Model
{
    use HasFactory;
    protected $table = 'subcategory';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'categoryId',
    ];

    /**
     * The roles that belong to the SubCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
}
