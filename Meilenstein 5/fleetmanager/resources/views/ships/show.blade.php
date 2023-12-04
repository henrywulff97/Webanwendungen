@extends('layouts.layout')

@section('content')
        <h1>Das Schiff "{{ $entity->name}}"</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>BRT</th>
                    <th>Schiff Klasse</th>
                    <th>Mannschafts Größe</th>
                    <th>Ladekapazität</th>
                    <th>Konstruktionsdatum</th>
                    <th>Tank Kapazität</th>
                </tr>
            </thead>
            <tbody>

                    <tr>
                        <th>{{ $entity->name}}</th>
                        <th>{{ $entity->brt}}</th>
                        <th>{{ $entity->ship_class }}</th>
                        <th> {{ $entity->crew_size }}</th>
                        <th> {{ $entity->cargo_capacity }} </th>
                        <th> {{ $entity->construction_date }} </th>
                        <th> {{ $entity->fuel_capacity }} </th>
                        <th></th>
                    </tr>

            </tbody>
        </table>
@endsection
