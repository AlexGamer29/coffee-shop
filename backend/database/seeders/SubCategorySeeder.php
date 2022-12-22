<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subcategory')->insert(
            [
                [
                    'name' => 'Trà trái cây',
                    'categoryId' => '1',
                ],
                [
                    'name' => 'Trà sữa macchiato',
                    'categoryId' => '1',
                ],
                [
                    'name' => 'Cà phê máy',
                    'categoryId' => '2',
                ],
                [
                    'name' => 'Cold Brew',
                    'categoryId' => '2',
                ],
            ]
        );
    }
}
