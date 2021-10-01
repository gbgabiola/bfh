<?php

namespace App\Http\Controllers;
use App\Models\Adminproduct;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\UserAuth;

class AdminproductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::latest()->paginate(5);
        return view('admin.products', compact('products'))
            ->with('i', (request()->input('page', 1) - 1) * 10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Adminproduct  $adminproduct
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Adminproduct  $adminproduct
     * @return \Illuminate\Http\Response
     */
    public function edit(Adminproduct $Adminproduct)
    {
        return view('admin.edit', compact('products'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Adminproduct  $adminproduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //Product update
        $request->validate([
            'product_name' => '',
            'product_quantity' => '',
            'product_price' => '',
            'category_id' => '',
            // required|image|mimes:jpeg,jpg,png,svg,gif|
        ]);

        $input = $request->all();

        // if ($image = $request->file('image')) {
        //     $path = 'image/';
        //     $productImage = date('mdYHis') . '.' . $image->getClientOriginalExtension();
        //     $image->move($path, $productImage);
        //     $input['image'] = "$productImage";
        // }

        $product->update($input);
        return redirect()->route('products.index')->with('success', 'Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Adminproduct  $adminproduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Deleted Successfully!');
    }
}
