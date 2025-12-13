<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificatesController extends Controller
{
    public function index()
    {
        return Inertia::render('Certificates/index', []);
    }
}
