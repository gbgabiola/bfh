<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="min-h-screen flex justify-center items-center">
            <div class="w-full max-w-md">
                <form
                    class="md:py-12 md:px-12 bg-white rounded-2xl shadow-xl z-20"
                    action="{{route('register-user')}}"
                    method="POST"
                >
                @if(Session::has('success'))
                <div class="alert alert-success">{{Session::get('success')}}</div>
                @endif
                @if(Session::has('fail'))
                <div class="alert alert-danger">{{Session::get('fail')}}</div>
                @endif
                @csrf
                <ul>
                    <li class="text-danger">@error('user_firstname'){{$message}}@enderror</li>
                    <li class="text-danger">@error('user_middlename'){{$message}}@enderror</li>
                    <li class="text-danger">@error('user_lastname'){{$message}}@enderror</li>
                    <li class="text-danger">@error('username'){{$message}}@enderror</li>
                    <li class="text-danger">@error('password'){{$message}}@enderror</li>
                </ul>
                    <div id="register"></div>
                </form>
            </div>
        </div>
    
        
            <!-- React JS -->        
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
