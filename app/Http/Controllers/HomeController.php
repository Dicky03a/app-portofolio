<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Certificate;
use App\Models\Education;
use App\Models\Pengalaman;
use App\Models\Project;
use App\Models\Skills;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
      public function index()
      {
            return Inertia::render('welcome', [
                  'about' => About::latest()->first(),
                  'educations' => Education::orderBy('start_year', 'desc')->get(),
                  'skills' => Skills::all(),
                  'certificates' => Certificate::orderBy('year', 'desc')->get(),
                  'projects' => Project::orderBy('created_at', 'desc')->get(),
                  'testimonials' => Testimonial::orderBy('created_at', 'desc')->get(),
                  'pengalamen' => Pengalaman::orderBy("id", "desc")->get(),
            ]);
      }
}
