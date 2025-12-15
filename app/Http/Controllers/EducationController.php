<?php

namespace App\Http\Controllers;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index()
    {
        return inertia('Education/index', [
            'educations' => Education::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'jurusan' => 'required|string|max:255',
            'institusi' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'start_year' => 'required|integer',
            'end_year' => 'nullable|integer',
        ]);

        Education::create($data);
    }

    public function update(Request $request, Education $education)
    {
        $data = $request->validate([
            'jurusan' => 'required|string|max:255',
            'institusi' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'start_year' => 'required|integer',
            'end_year' => 'nullable|integer',
        ]);

        $education->update($data);
    }

    public function destroy(Education $education)
    {
        $education->delete();
    }
}


