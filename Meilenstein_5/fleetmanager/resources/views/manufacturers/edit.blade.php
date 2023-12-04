@extends('layouts.layout')

@section('content')
    <h1>Hersteller bearbeiten</h1>
    @include('snippets.error')

    {{ html()->modelForm($entity, 'POST', url('manufacturers/update/'.$entity->id))->open() }}
    {{ html()->text('name')->class('form-control')->placeholder('Herstellername...') }}
    {{ html()->submit('Speichern')->class('btn btn-success') }}
    <a href="{{url('manufacturers')}}" class="btn btn-danger">Abbrechen</a>
    {{ html()->closeModelForm() }}
@endsection
