<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\Hobby;
use App\Models\Framework;

class ProfileController extends Controller
{
    public function getData()
    {
        try{
            $profile = Profile::with('frameworks','hobbies')
            ->where('rut', '207344842')
            ->first();

            return response()->json(
                $profile
            , 200);
        }catch (Exeption $e){
            throw new Exeption($e->getMessage());
        }
    }
}
