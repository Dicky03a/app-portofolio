<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CertificatesController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\SkillsController;
use App\Http\Controllers\TestimonialsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;
use PHPUnit\Metadata\Test;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/about', [AboutController::class, 'index'])
        ->name('about.index');
    Route::get('/education', [EducationController::class, 'index'])
        ->name('education.index');
    Route::get('/skils', [SkillsController::class, 'index'])
        ->name('skils.index');
    Route::get('/certificate', [CertificatesController::class, 'index'])
        ->name('certificate.index');
    Route::get('/projects', [ProjectsController::class, 'index'])
        ->name('projects.index');
    Route::get('/testimonial', [TestimonialsController::class, 'index'])
        ->name('testimonial.index');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
