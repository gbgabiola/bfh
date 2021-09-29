<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UserAuth extends Controller
{
    //redirect to login page
    public function login()
    {
        return view("auth.login");
    }

    //redirect to register page
    public function register()
    {
        return view("auth.register");
    }

    public function registerUser(Request $request)
    {
        //validation of input types
        $request->validate([
            'user_firstname'=>'required',
            'user_middlename'=>'required',
            'user_lastname'=>'required',
            'username'=>'required|unique:users',
            'password'=>'required|confirmed|min:6|max:50',
        ]);

        //creating new user
        $user = new User();
        $user->user_firstname = $request->user_firstname;
        $user->user_middlename = $request->user_middlename;
        $user->user_lastname = $request->user_lastname;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $res = $user->save();

        //validate if success or fail the registration
        if ($res) {
            return redirect('login')->with('success','You have registered successfully');
        } else {
            return back()->with('fail','Something wrong!');
        }
    }

    //login in function
    public function loginUser(Request $request)
    {
        //validation of input types
        $request->validate([
            'username'=>'required',
            'password'=>'required|min:5|max:50',
        ]);

        $user = User::where('username','=',$request->username)->first();
        if($user) {
            if(Hash::check($request->password,$user->password))
            {
                $request->session()->put('loginID', $user->user_id);
                return redirect('dashboard');
            } 
            else 
            {
                return back()->with('fail', 'Username or password does not match.');
            }
        } 
        else {
            return back()->with('fail', 'This username is not registered.');
        }
    }

    //after logging in it will redirect you to this or dashboard
    public function dashboard()
    {
        $data = array();
        if(Session::has('loginID')){
            $data = User::where('user_id', '=', Session::get('loginID'))->first();
        }
        return view('admin/sidebar', compact('data'));
    }

    public function products()
    {
        $data = array();
        if(Session::has('loginID')){
            $data = User::where('user_id', '=', Session::get('loginID'))->first();
        }
        return view('admin/products', compact('data'));
    }

    //logout function
    public function logout()
    {
        if(Session::has('loginID')){
            Session::pull('loginID');
            return redirect('login');
        }
    }
}
