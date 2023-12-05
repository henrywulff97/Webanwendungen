@extends('layouts.layout')

@section('content')
    <h1>Schiffsmodell editieren</h1>
    @include('snippets.error')

    {{ html()->modelForm($entity, 'POST', url('shipmodels/update/'.$entity->id))->open() }}
    {{ html()->text('name')->class('form-control')->placeholder('Schiffsname...') }}
    {{ html()->select('manufacturer_id')->options($manufacturer->pluck('name', 'id'))->class('form-control')->name('manufacturer_id')->placeholder('Manufacturer...') }}

    <br/>
    {{ html()->submit('Speichern')->class('btn btn-success') }}
    <a href="{{url('shipmodels')}}" class="btn btn-danger">Abbrechen</a>
    {{ html()->closeModelForm() }}
@endsection
