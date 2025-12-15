<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\About;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        About::create([
            'bio' => 'I am a passionate developer with experience in building modern web applications. I enjoy solving complex problems and learning new technologies.',
            'projects_built' => 24,
            'years_coding' => 5,
            'learner_mindset' => 'Continuous Learner',
        ]);

        About::create([
            'bio' => 'Experienced software engineer with expertise in React, Laravel, and full-stack development. Always eager to take on new challenges.',
            'projects_built' => 42,
            'years_coding' => 8,
            'learner_mindset' => 'Growth Mindset',
        ]);

        About::create([
            'bio' => 'Junior developer passionate about clean code and user experience. Constantly improving my skills in JavaScript, TypeScript, and PHP frameworks.',
            'projects_built' => 12,
            'years_coding' => 2,
            'learner_mindset' => 'Curious Explorer',
        ]);
    }
}