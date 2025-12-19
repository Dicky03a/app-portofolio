<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Skills extends Model
{
    protected $fillable = [
        'name',
        'percentage',
        'icon',
    ];

    protected $appends = ['icon_url'];

    public function getIconUrlAttribute()
    {
        if (!$this->icon) {
            return null;
        }

        return asset('storage/' . $this->icon);
    }
}
