@extends('layouts.layout')

@section('content')
    <h1>Alle Hersteller</h1>
    <a href="{{url('manufacturers/add')}}" class="btn btn-success">Neuen Hersteller hinzufügen</a>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Aktionen</th>
        </tr>
        </thead>
        <tbody>
        @foreach($entities as $manufacturer)
            <tr>
                <td>{{ $manufacturer->name }}</td>
                <td>
                    <a href="{{url('manufacturers/show/'.$manufacturer->id)}}" class="btn btn-success">Anzeigen</a>
                    <a href="{{url('manufacturers/edit/'.$manufacturer->id)}}" class="btn btn-success">Bearbeiten</a>
                    <a href="{{url('manufacturers/delete/'.$manufacturer->id)}}" class="btn btn-danger">Löschen</a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
