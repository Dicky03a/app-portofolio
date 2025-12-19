<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();

        // Transform projects to include thumbnail URLs and tech stack array
        $projects = $projects->map(function ($project) {
            $project->thumbnail_url = $project->thumbnail ? Storage::url($project->thumbnail) : null;
            $project->tech_stack_array = $project->tech_stack_array;
            return $project;
        });

        return Inertia::render('Projects/index', [
            'projects' => $projects,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'tech_stack' => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'short_description' => 'required|string',
            'github_url' => 'nullable|url',
            'demo_url' => 'nullable|url',
        ]);

        // Handle file upload for thumbnail
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('projects', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        }

        // Generate slug from title
        $validatedData['slug'] = Str::slug($validatedData['title']);

        Project::create($validatedData);

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    public function edit($id)
    {
        $project = Project::findOrFail($id);

        // Add thumbnail URL and tech stack array for the edit view
        $project->thumbnail_url = $project->thumbnail ? Storage::url($project->thumbnail) : null;
        $project->tech_stack_array = $project->tech_stack_array;

        return Inertia::render('Projects/edit', [
            'project' => $project
        ]);
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'tech_stack' => 'required|string|max:255',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'short_description' => 'required|string',
            'github_url' => 'nullable|url',
            'demo_url' => 'nullable|url',
        ]);

        // Handle file upload for thumbnail if provided
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail if it exists
            if ($project->thumbnail) {
                Storage::disk('public')->delete($project->thumbnail);
            }

            $thumbnailPath = $request->file('thumbnail')->store('projects', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        } else {
            // Keep the existing thumbnail if no new file was uploaded
            $validatedData['thumbnail'] = $project->thumbnail;
        }

        // Update slug from title
        $validatedData['slug'] = Str::slug($validatedData['title']);

        $project->update($validatedData);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);

        // Delete the thumbnail file if it exists
        if ($project->thumbnail) {
            Storage::disk('public')->delete($project->thumbnail);
        }

        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }
}