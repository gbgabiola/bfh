<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!--tailwindcss-->
        <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.1/css/jquery.dataTables.css">
        
        <!--external css -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    </head>
    <body>
        
        <div class="relative min-h-screen md:flex">
            <!-- dashboard components -->  
            <div id="sidebar"></div>
            <div class="flex-1 font-bold">
            <form
                class="md:py-12 md:px-12 bg-white rounded-2xl shadow-xl z-20"
                action="{{route('add-products')}}"
                method="POST">
                @csrf
                <div id="addproducts"></div>
            </form>
            </div>
            
        </div>



            <!-- React JS -->        
        <script src="{{ mix('js/app.js') }}"></script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.1/js/jquery.dataTables.js"></script>
        <script type="text/javascript">
        // grab everything we need
        const btn = document.querySelector(".mobile-menu-button");
        const sidebar = document.querySelector(".sidebar");

        // add our event listener for the click
        btn.addEventListener("click", () => {
            sidebar.classNameNameNameList.toggle("-translate-x-full");
        });
        </script>
    </body>
</html>
