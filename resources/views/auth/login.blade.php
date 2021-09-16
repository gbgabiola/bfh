<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="m-48 flex items-center justify-center">
            <div class="w-full max-w-md">
                <form
                    class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
                    action="{{route('login-user')}}"
                    method="POST">
                    @csrf
                    @if(Session::has('success'))
                    <div class="alert alert-success">{{Session::get('success')}}</div>
                    @endif
                    @if(Session::has('fail'))
                    <div class="alert alert-danger">{{Session::get('fail')}}</div>
                    @endif
                    <div id="login"></div>
                </form>
                <ul class="text-center">
                    <li class="text-danger">@error('username'){{$message}}@enderror</li>
                    <li class="text-danger">@error('password'){{$message}}@enderror</li>
                </ul>
            </div>
        </div>
    
        
            <!-- React JS -->        
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
