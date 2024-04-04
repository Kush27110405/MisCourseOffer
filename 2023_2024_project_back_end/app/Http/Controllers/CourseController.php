<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Hello World'
        ]);
    }
    public function showUser(Request $request)
    {
        // fetch data from database
        $data=DB::table('login_logout_log')->get();
        return response()->json([
            'data' => $data
        ]);
    }

}
