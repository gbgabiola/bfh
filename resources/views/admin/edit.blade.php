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
        {{-- Bootstrap CSS --}}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossorigin="anonymous">
            
        {{-- bootsrap JS bundle --}}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" 
        crossorigin="anonymous"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" 
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" 
        crossorigin="anonymous">
        </script>
        <!--external css -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    </head>
    <body>
        <div class="relative min-h-screen md:flex">
            <!-- dashboard components -->  
            <div id="sidebar"></div>
            <div class="flex-1 font-bold">
                @if ($message = Session::get('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{{$message}}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                @endif   
                <div id="updateproducts"></div>
                <form action="" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="mx-40">
                        <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                            <strong>Add Products</strong>
                        </div>
            
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="productname"
                            >
                                Product Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="product_name"
                                id="product_name"
                                type="text"
                                
                                placeholder="Enter Product Name"
                            />
                            <span id="error-firstname"></span>
                        </div>
            
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="price"
                            >
                                Price
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="product_price"
                                id="product_price"
                                type="number"
                                
                                placeholder="Enter Product Price"
                            />
                        </div>
            
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="quantity"
                            >
                                Quantity
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="product_quantity"
                                id="product_quantity"
                                type="number"
                                
                                placeholder="Enter Quantity"
                            />
                        </div>
            
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="size"
                            >
                                Size
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="product_size"
                                id="product_size"
                                type="text"
                                
                                placeholder="Enter Size"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter Category"
                                name="category_id"
                                id="category_id"
                                
                                required
                            />
                        </div>
            
                        <div class="flex items-center justify-between">
                            <button
                                class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                                type="submit" value="Submit"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
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
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.1/js/jquery.dataTables.js"></script>
    </body>
</html>
