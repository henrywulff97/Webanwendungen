@extends('layouts.layout')

@section('content')
    <h1>Schiffsmodell editieren</h1>
    @include('snippets.error')

    {{ html()->modelForm($entity, 'POST', url('shipmodels/update/'.$entity->id))->open() }}
    {{ html()->text('name')->class('form-control')->placeholder('Schiffsname...') }}
    <br/>
    {{ html()->submit('Speichern')->class('btn btn-success') }}
    <a href="{{url('shipmodels')}}" class="btn btn-danger">Abbrechen</a>
    {{ html()->closeModelForm() }}
@endsection
