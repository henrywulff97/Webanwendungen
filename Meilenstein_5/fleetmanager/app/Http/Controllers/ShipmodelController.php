<?php

namespace App\Http\Controllers;

class ShipmodelController extends Controller
{
    protected $className = 'App\Models\Shipmodel';
    protected $entityName = 'shipmodels';
    protected $fields = ['name', 'manufacturer_id'];
    protected array $validation = [
        'name' => 'required',
        'manufacturer_id' => 'required|exists:manufacturers,id',
    ];
}
