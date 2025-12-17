<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CertificatesController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\SkillsController;
use App\Http\Controllers\TestimonialsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;
use PHPUnit\Metadata\Test;

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    // Route About
    Route::get('/about', [AboutController::class, 'index'])
        ->name('about.index');
    Route::get('/about/{id}/edit', [AboutController::class, 'edit'])
        ->name('about.edit');
    Route::match(['put', 'patch'], '/about/{id}', [AboutController::class, 'update'])
        ->name('about.update');
    // Route About End


    // Route Education
    Route::get('/education', [EducationController::class, 'index'])
        ->name('education.index');
    Route::get('/education/create', [EducationController::class, 'create'])
        ->name('education.create');
    Route::post('/education', [EducationController::class, 'store'])
        ->name('education.store');
    Route::get('/education/{id}/edit', [EducationController::class, 'edit'])
        ->name('education.edit');
    Route::match(['put', 'patch'], '/education/{id}', [EducationController::class, 'update'])
        ->name('education.update');
    Route::delete('/education/{id}', [EducationController::class, 'destroy'])
        ->name('education.destroy');

    // Route Education End


    // Route Skills
    Route::get('/skils', [SkillsController::class, 'index'])
        ->name('skils.index');


    // Route Certificate
    Route::get('/certificate', [CertificatesController::class, 'index'])
        ->name('certificate.index');


    // Route Projects
    Route::get('/projects', [ProjectsController::class, 'index'])
        ->name('projects.index');


    // Route Testimonial
    Route::get('/testimonial', [TestimonialsController::class, 'index'])
        ->name('testimonial.index');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
