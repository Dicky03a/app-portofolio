<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class SkillsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Skills/index', [
            'skills' => Skills::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Skills/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|integer|min:0|max:100',
            'icon' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // 2MB max
        ]);

        $data = $request->except(['icon']);

        if ($request->hasFile('icon')) {
            $iconPath = $request->file('icon')->store('skills-icons', 'public');
            $data['icon'] = $iconPath;
        }

        Skills::create($data);

        return redirect()->route('skills.index')
            ->with('flash', [
                'success' => 'Skill created successfully.'
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skills $skill)
    {
        return Inertia::render('Skills/edit', [
            'skill' => [
                'id' => $skill->id,
                'name' => $skill->name,
                'percentage' => $skill->percentage,
                'icon' => $skill->icon_url,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skills $skill)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|integer|min:0|max:100',
            'icon' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // 2MB max
        ]);

        $data = $request->except(['icon']);

        if ($request->hasFile('icon')) {
            // Delete old icon if exists
            if ($skill->icon) {
                Storage::disk('public')->delete($skill->icon);
            }

            $iconPath = $request->file('icon')->store('skills-icons', 'public');
            $data['icon'] = $iconPath;
        }

        $skill->update($data);

        return redirect()->route('skills.index')
            ->with('flash', [
                'success' => 'Skill updated successfully.'
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skills $skill)
    {
        // Delete the icon file if it exists
        if ($skill->icon) {
            Storage::disk('public')->delete($skill->icon);
        }

        $skill->delete();

        return redirect()->route('skills.index')
            ->with('flash', [
                'success' => 'Skill deleted successfully.'
            ]);
    }
}
