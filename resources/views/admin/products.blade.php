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
                <div id="products"></div>
                <div class="flex flex-col mt-8 mx-8">
                    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table class="table table-bordered table-hover">
                                <thead class="bg-gray-200">
                                    <tr>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Image
                                        </th>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Name
                                        </th>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Quantity
                                        </th>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Price
                                        </th>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Category
                                        </th>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Edit
                                        </th>
                                        <th class="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                    
                                @foreach ($products as $product)
                                    <tr class="text-center">
                                            <td
                                            scope="row"
                                            class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex justify-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        class="w-10 h-10 rounded-full"
                                                        src="https://source.unsplash.com/user/erondu"
                                                        alt="admin dashboard ui"
                                                    />
                                                </div>
                                            </div>
                                        </td>

                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-500 font-medium">
                                            {{$product->product_name}}
                                        </div>
                                    </td>

                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-500 font-medium">
                                            {{$product->product_quantity}}
                                        </div>
                                    </td>

                                    <td
                                        width="15%"
                                        class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                                    >
                                        <div class="text-sm leading-5 text-gray-500 font-medium">
                                            <span>&#8369; </span>
                                            {{$product->product_price}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-500 font-medium">
                                            {{$product->category_id}}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex justify-center font-medium">
                                            @csrf
                                            <a
                                                href="{{route('products.edit', $product->id)}}">
                                            
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-6 h-6 text-blue-400 cursor-pointer"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex justify-center">
                                            <form action="{{route('products.destroy', $product->id)}}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-6 h-6 text-red-400 cursor-pointer"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                            </button>
                                            </form>
                                        </div>
                                    </td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    </div>
                </div>
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
