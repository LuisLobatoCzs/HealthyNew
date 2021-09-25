@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center p-5">
        <div class="col-12">
            <div class="card">
                <div class="card-header">{{ __('Panel Administrativo') }}</div>

                <div class="">

                    <div class="table-responsive">
                        <table class="table">
                            <thead class="thead">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Cédula</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Especialista que solicita</td>
                                    <td>0123456789</td>
                                    <td><Button class="btn btn-success"> Aprobar </Button> <button class="btn btn-danger"> Denegar </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
@endsection
