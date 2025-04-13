<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MenuReorderingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $menus = $request->input('menus');


        DB::transaction(function () use ($menus) {
            foreach ($menus as $index => $menu) {
                $menu = Menu::find($menu);
                $menu->update([
                    'position' => $index + 1
                ]);
            }
        });

        return redirect()->back();
    }
}
