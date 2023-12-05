<?php

namespace App\Http\Controllers;

use App\Models\Manufacturer;

class ShipmodelController extends Controller
{
    protected $className = 'App\Models\Shipmodel';
    protected $entityName = 'shipmodels';
    protected $fields = ['name', 'manufacturer_id'];
    protected array $validation = [
        'name' => 'required',
        'manufacturer_id' => 'required|exists:manufacturers,id',
    ];

    public function getAdd()
    {
        $manufacturer = Manufacturer::all();
        return view($this->entityName . '.add')->with('manufacturer', $manufacturer);
    }

    public function getEdit($id)
    {
        $class = $this->className;
        $entity = $class::find($id);
        $manufacturer = Manufacturer::all();
        if ($entity) {
            return view($this->entityName . '.edit')->with('entity', $entity)->with('manufacturer', $manufacturer);
        }
        return redirect($this->entityName . '/index');
    }
}
