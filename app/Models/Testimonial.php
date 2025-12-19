<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'message',
        'name',
        'position',
        'avatar',
    ];

    public function getAvatarUrlAttribute()
    {
        if ($this->avatar) {
            return asset($this->avatar);
        }
        return asset('default-avatar.png'); // fallback image
    }
}
