<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuResource;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = MenuResource::collection(
            Menu::orderBy('position')->get()
        );
        return Inertia::render('menus/index', ['menus' => $menus]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('menus/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5024',
        ]);

        $imageUrl = $request->file('image')->store('menus');

        Menu::create([
            'name' => $request->name,
            'image_url' => $imageUrl,
            'position' => Menu::max('position') + 1,
        ]);

        return redirect()->route('menus.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        return Inertia::render('menus/edit', ['menu' => new MenuResource($menu)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5024',
        ]);

        if ($request->hasFile('image')) {
            Storage::delete($menu->image_url);

            $imageUrl = $request->file('image')->store('menus');
        }


        $menu->update([
            'name' => $request->name,
            'image_url' => $imageUrl ?? $menu->image_url,
        ]);

        return redirect()->route('menus.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        Storage::delete($menu->image_url);

        $menu->delete();

        $menus = Menu::orderBy('position')->get();
        foreach ($menus as $index => $menu) {
            $menu->update(['position' => $index + 1]);
        }

        return redirect()->back();
    }
}
