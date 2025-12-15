<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
      public function index()
      {
            return Inertia::render('welcome', [
                  'about' => About::latest()->first()
            ]);
      }
}
