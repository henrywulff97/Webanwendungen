<?php

namespace App\Http\Controllers;

use App\Models\Shipmodel;
use Illuminate\Foundation\Application;

class ShipController extends Controller
{
    protected $className = 'App\Models\Ship';
    protected $entityName = 'ships';
    protected $fields = ['name', 'brt', 'ship_class', 'crew_size', 'cargo_capacity', 'construction_date', 'fuel_capacity'];
    protected array $validation = [
        'name' => 'required',
        'brt' => 'required|numeric',
        'ship_class' => 'nullable|string',
        'crew_size' => 'required|integer|min:0',
        'cargo_capacity' => 'nullable|numeric',
        'construction_date' => 'nullable|integer',
        'fuel_capacity' => 'nullable|numeric'
    ];

    public function getAdd()
    {
        $shipmodels = Shipmodel::pluck('name', 'id');
        return view('ships.add', compact('shipmodels'));
    }
}
