<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();

            // Deskripsi utama About Me
            $table->text('bio');

            // Highlight statistik
            $table->unsignedInteger('projects_built')->default(0);
            $table->unsignedTinyInteger('years_coding')->default(0);

            // Nilai / mindset
            $table->string('learner_mindset', 50)->default('Continuous Learner');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abouts');
    }
};
