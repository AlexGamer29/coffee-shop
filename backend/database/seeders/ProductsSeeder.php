<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(
            [
                [
                    'categoryId' => '1',
                    'subCategoryId' => '1',
                    'name' => 'Trà long nhãn hạt sen',
                    'price' => '45000',
                ],
                [
                    'categoryId' => '1',
                    'subCategoryId' => '1',
                    'name' => 'Trà hạt sen',
                    'price' => '50000'
                ],
                [
                    'categoryId' => '1',
                    'subCategoryId' => '2',
                    'name' => 'Trà sữa dừa',
                    'price' => '35000'
                ],
                [
                    'categoryId' => '1',
                    'subCategoryId' => '2',
                    'name' => 'Hồng Trà Sữa Nóng',
                    'price' => '60000'
                ],
                [
                    'categoryId' => '2',
                    'subCategoryId' => '1',
                    'name' => 'Latte Đá',
                    'price' => '42000'
                ],
                [
                    'categoryId' => '2',
                    'subCategoryId' => '1',
                    'name' => 'Americano Đá',
                    'price' => '55000'
                ],
                [
                    'categoryId' => '2',
                    'subCategoryId' => '2',
                    'name' => 'Cold Brew Sữa Tươi',
                    'price' => '40000'
                ],
                [
                    'categoryId' => '2',
                    'subCategoryId' => '2',
                    'name' => 'Cold Brew Truyền Thống',
                    'price' => '40000'
                ],
            ]
        );
    }
}
