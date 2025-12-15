<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'education';

    protected $fillable = [
        'jurusan',
        'institusi',
        'deskripsi',
        'start_year',
        'end_year',
    ];
}
