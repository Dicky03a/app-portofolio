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
    Route::get('/skills', [SkillsController::class, 'index'])
        ->name('skills.index');
    Route::get('/skills/create', [SkillsController::class, 'create'])
        ->name('skills.create');
    Route::post('/skills', [SkillsController::class, 'store'])
        ->name('skills.store');
    Route::get('/skills/{id}/edit', [SkillsController::class, 'edit'])
        ->name('skills.edit');
    Route::match(['put', 'patch'], '/skills/{id}', [SkillsController::class, 'update'])
        ->name('skills.update');
    Route::delete('/skills/{id}', [SkillsController::class, 'destroy'])
        ->name('skills.destroy');
    // Route Skills End


    // Route Certificate
    Route::get('/certificates', [CertificatesController::class, 'index'])
        ->name('certificates.index');
    Route::get('/certificates/create', [CertificatesController::class, 'create'])
        ->name('certificates.create');
    Route::post('/certificates', [CertificatesController::class, 'store'])
        ->name('certificates.store');
    Route::get('/certificates/{id}/edit', [CertificatesController::class, 'edit'])
        ->name('certificates.edit');
    Route::match(['put', 'patch'], '/certificates/{id}', [CertificatesController::class, 'update'])
        ->name('certificates.update');
    Route::delete('/certificates/{id}', [CertificatesController::class, 'destroy'])
        ->name('certificates.destroy');


    // Route Projects
    Route::get('/projects', [ProjectsController::class, 'index'])
        ->name('projects.index');
    Route::get('/projects/create', [ProjectsController::class, 'create'])
        ->name('projects.create');
    Route::post('/projects', [ProjectsController::class, 'store'])
        ->name('projects.store');
    Route::get('/projects/{id}/edit', [ProjectsController::class, 'edit'])
        ->name('projects.edit');
    Route::match(['put', 'patch'], '/projects/{id}', [ProjectsController::class, 'update'])
        ->name('projects.update');
    Route::delete('/projects/{id}', [ProjectsController::class, 'destroy'])
        ->name('projects.destroy');


    // Route Testimonial
    Route::get('/testimonials', [TestimonialsController::class, 'index'])
        ->name('testimonials.index');
    Route::get('/testimonials/create', [TestimonialsController::class, 'create'])
        ->name('testimonials.create');
    Route::post('/testimonials', [TestimonialsController::class, 'store'])
        ->name('testimonials.store');
    Route::get('/testimonials/{id}/edit', [TestimonialsController::class, 'edit'])
        ->name('testimonials.edit');
    Route::match(['put', 'patch'], '/testimonials/{id}', [TestimonialsController::class, 'update'])
        ->name('testimonials.update');
    Route::delete('/testimonials/{id}', [TestimonialsController::class, 'destroy'])
        ->name('testimonials.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
