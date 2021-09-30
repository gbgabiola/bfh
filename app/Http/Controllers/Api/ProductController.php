<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function tblProducts()
    {
        //
        $data = Product::all();
        return $data;
        // $data = Product::latest()->paginate(5);
        // return view('admin.products', compact('products'))
        //     ->with('i', (request()->input('page', 1) - 1) * 5);
    }


    public function addProducts(Request $request)
    {
        // $data = new ProductModel();
        // $data->product_name = $request->product_name;
        // $data->product_price = $request->product_price;
        // $data->product_quantity = $request->product_quantity;
        // $data->product_size = $request->product_size;
        // $data->category_id = $request->category_id;
        // $data->save();
        //validation of input types
        $request->validate([
            'product_name'=>'required',
            'product_price'=>'required',
            'product_quantity'=>'required',
            'product_size'=>'required',
            'category_id'=>'required',
        ]);

        //creating new user
        $data = new Product();
        $data->product_name = $request->product_name;
        $data->product_price = $request->product_price;
        $data->product_quantity = $request->product_quantity;
        $data->product_size = $request->product_size;
        $data->category_id = $request->category_id;
        $res = $data->save();

        //validate if success or fail the registration
        if ($res) {
            return redirect('products')->with('success','Added products successfully');
        } else {
            return back()->with('fail','Something wrong!');
        }
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $data)
    {
        //
        $request->validate([
            'product_name'=>'',
            'product_price'=>'',
            'product_quantity'=>'',
            'product_size'=>'',
            'category_id'=>'',
        ]);

        $input = $request->all();
        $data->update($input);
        return redirect()->route('products.tblProducts')->with('success', 'Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
