@extends('layouts.layout')

@section('content')
    <h1>Alle Schiffe</h1>
    {{ $entities->links() }}
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
            <th>Bearbeiten</th>
        </tr>
        </thead>
        <tbody>
        @foreach($entities as $index=>$ship)
            <tr>
                <td>{{ $ship->name }}</td>
                <td>{{ $ship->brt }}</td>
                <td>{{ $ship->ship_class }}</td>
                <td>{{ $ship->crew_size }}</td>
                <td>{{ $ship->cargo_capacity }}</td>
                <td>{{ $ship->construction_date }}</td>
                <td>{{ $ship->fuel_capacity }}</td>
                <td>
                    <a href="{{url('ships/show/'.$ship->id)}}" class="btn btn-success">Show</a>
                    <a href="{{url('ships/edit/'.$ship->id)}}" class="btn btn-success">Edit</a>
                    <a href="{{url('ships/delete/'.$ship->id)}}" class="btn btn-danger">Del</a>
                </td>
            </tr>
        @endforeach
        </tbody>
        <tfoot>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <a href="{{url('ships/add')}}" class="btn btn-success">Add</a>
            </td>
        </tr>
        </tfoot>
    </table>
    {{ $entities->links() }}
@endsection
