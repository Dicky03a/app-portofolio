<?php

namespace App\Http\Controllers;

use App\Models\Pengalaman;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class PengalamanController extends Controller
{
    public function index()
    {
        $pengalamen = Pengalaman::orderBy("id", "desc")->get();

        return Inertia::render("Pengalaman/index", [
            "pengalamen" => $pengalamen,
            "flash" => [
                "success" => session("success"),
                "error" => session("error"),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render("Pengalaman/create");
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "name" => "required|string|max:255",
            "role" => "required|string|max:255",
            "photo" => "required|image|mimes:jpeg,png,jpg,webp|max:10240",
        ]);

        if ($request->hasFile('photo')) {

            $manager = new ImageManager(new Driver());

            $image = $manager->read($request->file('photo'));

            // Resize max width 800px (rasio aman)
            $image->scale(width: 800);

            // Generate nama file
            $filename = Str::uuid() . '.jpg';

            // Simpan hasil kompres
            Storage::disk('public')->put(
                'pengalamen/' . $filename,
                $image->toJpeg(80) // quality 80%
            );

            $validatedData['photo'] = 'pengalamen/' . $filename;
        }


        Pengalaman::create($validatedData);

        return redirect()->route("pengalaman.index")->with("success", "Pengalaman record created successfully.");
    }

    public function edit($id)
    {
        $pengalaman = Pengalaman::findOrFail($id);

        return Inertia::render("Pengalaman/edit", [
            "pengalaman" => $pengalaman
        ]);
    }

    public function update(Request $request, $id)
    {
        $pengalaman = Pengalaman::findOrFail($id);

        $validatedData = $request->validate([
            "name" => "required|string|max:255",
            "role" => "required|string|max:255",
            "photo" => "required|image|mimes:jpeg,png,jpg,webp|max:10240",
        ]);

        if ($request->hasFile('photo')) {

            if ($pengalaman->photo) {
                Storage::disk('public')->delete($pengalaman->photo);
            }

            $manager = new ImageManager(new Driver());
            $image = $manager->read($request->file('photo'));
            $image->scale(width: 800);

            $filename = Str::uuid() . '.jpg';

            Storage::disk('public')->put(
                'pengalamen/' . $filename,
                $image->toJpeg(80)
            );

            $validatedData['photo'] = 'pengalamen/' . $filename;
        }


        $pengalaman->update($validatedData);

        return redirect()->route("pengalaman.index")->with("success", "Pengalaman record updated successfully.");
    }

    public function destroy($id)
    {
        $pengalaman = Pengalaman::findOrFail($id);
        $pengalaman->delete();

        return redirect()->route("pengalaman.index")->with("success", "Pengalaman record deleted successfully.");
    }
}
