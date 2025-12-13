<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialsController extends Controller
{
    public function index()
    {
        return Inertia::render('Testimonials/index', []);
    }
}
