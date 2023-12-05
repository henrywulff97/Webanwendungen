<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ship extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'brt',
        'ship_class',
        'crew_size',
        'cargo_capacity',
        'construction_date',
        'fuel_capacity',
    ];

    public function shipmodel()
    {
        return $this->belongsTo(Shipmodel::class);
    }
}
