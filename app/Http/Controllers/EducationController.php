<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationController extends Controller
{
    public function index()
    {
        $educations = Education::orderBy('start_year', 'desc')->get();

        return Inertia::render('Education/index', [
            'educations' => $educations,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Education/create');
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'jurusan' => 'required|string|max:255',
            'institusi' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'start_year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
            'end_year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10),
        ]);

        Education::create($validatedData);

        return redirect()->route('education.index')->with('success', 'Education record created successfully.');
    }

    public function edit($id)
    {
        $education = Education::findOrFail($id);

        return Inertia::render('Education/edit', [
            'education' => $education
        ]);
    }

    public function update(Request $request, $id)
    {
        $education = Education::findOrFail($id);

        $validatedData = $request->validate([
            'jurusan' => 'required|string|max:255',
            'institusi' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'start_year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
            'end_year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10),
        ]);

        $education->update($validatedData);

        return redirect()->route('education.index')->with('success', 'Education record updated successfully.');
    }

    public function destroy($id)
    {
        $education = Education::findOrFail($id);
        $education->delete();

        return redirect()->route('education.index')->with('success', 'Education record deleted successfully.');
    }
}


