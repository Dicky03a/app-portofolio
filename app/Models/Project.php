<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'tech_stack',
        'thumbnail',
        'short_description',
        'github_url',
        'demo_url',
    ];

    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail && Storage::disk('public')->exists($this->thumbnail)) {
            return Storage::url($this->thumbnail);
        }

        return asset('placeholder-image.jpg'); // fallback image
    }

    public function getTechStackArrayAttribute()
    {
        if ($this->tech_stack) {
            return array_map('trim', explode(',', $this->tech_stack));
        }
        return [];
    }
}
