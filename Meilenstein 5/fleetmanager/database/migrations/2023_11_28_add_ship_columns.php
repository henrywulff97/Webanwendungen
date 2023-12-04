<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ships', function (Blueprint $table) {
            $table->string('ship_class')->nullable();
            $table->integer('crew_size')->default(0);
            $table->float('cargo_capacity')->nullable();
            $table->integer('construction_date')->nullable();
            $table->float('fuel_capacity')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ships', function (Blueprint $table) {
            $table->dropColumn('ship_class');
            $table->dropColumn('crew_size');
            $table->dropColumn('cargo_capacity');
            $table->dropColumn('construction_date');
            $table->dropColumn('fuel_capacity');
        });
    }
};
