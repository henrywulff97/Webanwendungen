@extends('layouts.layout')

@section('content')
    <h1>Der Hersteller "{{ $entity->name}}"</h1>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Bearbeiten</th>
        </tr>
        </thead>
        <tbody>

        <tr>
            <th>{{ $entity->name}}</th>
            <th></th>
        </tr>

        </tbody>
    </table>
@endsection
