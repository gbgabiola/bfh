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

        <!--external css -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    </head>
    <body>
        
        <div class="relative min-h-screen md:flex">
            <!-- dashboard components -->  
            <div id="sidebar"></div> 
            <div class="flex-1 md:p-10 md:text-2xl font-bold">
                <div id="dashboard"></div>
            </div>
        </div>



            <!-- React JS -->        
        <script src="{{mix('js/app.js')}}"></script>
        <script type="text/javascript">
        // grab everything we need
            const btn = document.querySelector(".mobile-menu-button");
            const sidebar = document.querySelector(".sidebar");

        // add our event listener for the click
            btn.addEventListener("click", () => {
                sidebar.classList.toggle("-translate-x-full");
            });
        </script>
    </body>
</html>
