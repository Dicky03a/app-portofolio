<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimonialsController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::orderBy('created_at', 'desc')->get();

        // Transform testimonials to include avatar URLs
        $testimonials = $testimonials->map(function ($testimonial) {
            $testimonial->avatar_url = $testimonial->avatar ? Storage::url($testimonial->avatar) : asset('default-avatar.png');
            return $testimonial;
        });

        return Inertia::render('Testimonials/index', [
            'testimonials' => $testimonials,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Testimonials/create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'message' => 'required|string',
            'name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload for avatar
        if ($request->hasFile('avatar')) {
            $avatarPath = $request->file('avatar')->store('testimonials', 'public');
            $validatedData['avatar'] = $avatarPath;
        }

        Testimonial::create($validatedData);

        return redirect()->route('testimonials.index')->with('success', 'Testimonial created successfully.');
    }

    public function edit($id)
    {
        $testimonial = Testimonial::findOrFail($id);

        // Add avatar URL for the edit view
        $testimonial->avatar_url = $testimonial->avatar ? Storage::url($testimonial->avatar) : asset('default-avatar.png');

        return Inertia::render('Testimonials/edit', [
            'testimonial' => $testimonial
        ]);
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $validatedData = $request->validate([
            'message' => 'required|string',
            'name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload for avatar if provided
        if ($request->hasFile('avatar')) {
            // Delete old avatar if it exists
            if ($testimonial->avatar) {
                Storage::disk('public')->delete($testimonial->avatar);
            }

            $avatarPath = $request->file('avatar')->store('testimonials', 'public');
            $validatedData['avatar'] = $avatarPath;
        } else {
            // Keep the existing avatar if no new file was uploaded
            $validatedData['avatar'] = $testimonial->avatar;
        }

        $testimonial->update($validatedData);

        return redirect()->route('testimonials.index')->with('success', 'Testimonial updated successfully.');
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);

        // Delete the avatar file if it exists
        if ($testimonial->avatar) {
            Storage::disk('public')->delete($testimonial->avatar);
        }

        $testimonial->delete();

        return redirect()->route('testimonials.index')->with('success', 'Testimonial deleted successfully.');
    }
}
