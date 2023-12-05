<?php

namespace App\Http\Controllers;

use App\Models\Ship;
use App\Models\Shipmodel;
use Illuminate\Contracts\View\View;

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
        $shipmodels = ShipModel::all();
        return view($this->entityName . '.add')->with('shipmodels', $shipmodels);
    }

    public function getEdit($id)
    {
        $class = $this->className;
        $entity = $class::find($id);
        $shipmodels = ShipModel::all();
        if ($entity) {
            return view($this->entityName . '.edit')->with('entity', $entity)->with('shipmodels', $shipmodels);
        }
        return redirect($this->entityName . '/index');
    }
}
