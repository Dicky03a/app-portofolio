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
        // Check if the column with typo exists before renaming
        if (Schema::hasColumn('certificates', 'crede   ntial_url')) {
            Schema::table('certificates', function (Blueprint $table) {
                $table->renameColumn('crede   ntial_url', 'credential_url');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasColumn('certificates', 'credential_url')) {
            Schema::table('certificates', function (Blueprint $table) {
                $table->renameColumn('credential_url', 'crede   ntial_url');
            });
        }
    }
};
