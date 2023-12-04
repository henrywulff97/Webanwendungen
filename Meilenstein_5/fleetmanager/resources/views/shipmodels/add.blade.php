@extends('layouts.layout')

@section('content')
        <h1>Schiffsmodell hinzufügen</h1>
        @include('snippets.error')

        {{ html()->form('POST', url('/shipmodels/save'))->open() }}
        {{ html()->text('name')->class('form-control')->placeholder('Schiffsname...') }}
        {{ html()->text('manufacturer_id')->class('form-control')->placeholder('Manufacturer...') }}
            <br/>
        {{ html()->submit('Speichern')->class('btn btn-success') }}
            <a href="{{url('shipmodels')}}" class="btn btn-danger">Abbrechen</a>

        {{ html()->form()->close() }}
@endsection
