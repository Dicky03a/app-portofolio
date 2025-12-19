<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificatesController extends Controller
{
    public function index()
    {
        $certificates = Certificate::orderBy('year', 'desc')->get();

        return Inertia::render('Certificates/index', [
            'certificates' => $certificates,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Certificates/create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10),
            'credential_url' => 'nullable|url',
        ]);

        Certificate::create($validatedData);

        return redirect()->route('certificates.index')->with('success', 'Certificate record created successfully.');
    }

    public function edit($id)
    {
        $certificate = Certificate::findOrFail($id);

        return Inertia::render('Certificates/edit', [
            'certificate' => $certificate
        ]);
    }

    public function update(Request $request, $id)
    {
        $certificate = Certificate::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10),
            'credential_url' => 'nullable|url',
        ]);

        $certificate->update($validatedData);

        return redirect()->route('certificates.index')->with('success', 'Certificate record updated successfully.');
    }

    public function destroy($id)
    {
        $certificate = Certificate::findOrFail($id);
        $certificate->delete();

        return redirect()->route('certificates.index')->with('success', 'Certificate record deleted successfully.');
    }
}
