@extends('layouts.layout')

@section('content')
    <h1>Schiff hinzufügen</h1>
    @include('snippets.error')

    {{ html()->form('POST', url('/ships/save'))->open() }}
    {{ html()->text('name')->class('form-control')->placeholder('Schiffsname...') }}
    <br/>
    {{ html()->text('brt')->class('form-control')->placeholder('BRT...') }}
    <br/>
    {{ html()->select('ship_model_id')->options($shipmodels->pluck('name', 'id'))->class('form-control')->name('ship_class')->placeholder('Schiffsmodell...') }}
    <br/>
    {{ html()->number('crew_size')->class('form-control')->placeholder('Besatzungsgröße...') }}
    <br/>
    {{ html()->number('cargo_capacity')->class('form-control')->placeholder('Ladekapazität...') }}
    <br/>
    {{ html()->number('construction_date')->class('form-control')->placeholder('Baujahr...') }}
    <br/>
    {{ html()->number('fuel_capacity')->class('form-control')->placeholder('Treibstoffkapazität...') }}
    <br/>
    {{ html()->submit('Speichern')->class('btn btn-success') }}
    <a href="{{url('ships')}}" class="btn btn-danger">Abbrechen</a>

    {{ html()->form()->close() }}
@endsection
