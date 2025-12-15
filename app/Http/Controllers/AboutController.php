<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $abouts = About::all();
        return Inertia::render('About/index', [
            'abouts' => $abouts,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    public function edit($id)
    {
        $about = About::findOrFail($id);
        return Inertia::render('About/edit', [
            'about' => $about
        ]);
    }

    public function update(Request $request, $id)
    {
        $about = About::findOrFail($id);

        $validatedData = $request->validate([
            'bio' => 'required|string',
            'projects_built' => 'required|integer|min:0',
            'years_coding' => 'required|integer|min:0',
            'learner_mindset' => 'required|string|max:50',
        ]);

        $about->update($validatedData);

        return redirect()->route('about.index')->with('success', 'About record updated successfully.');
    }

    public function show()
    {
        return Inertia::render('welcome', [
            'about' => About::latest()->first()
        ]);
    }
}
