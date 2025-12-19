<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Education;
use App\Models\Skills;
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
            ]);
      }
}
