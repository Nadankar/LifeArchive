<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MemoryController extends Controller
{
    //retrive all data
    public function index(Request $request)
    {
        return $request->user()->memories;  
    } 

    //show
    public function show(Request $request, int $id)
    {
        $memory = $request->user()->memories()->findOrFail($id);

        return response()->json($memory);
    }

    //save data
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|string',
            'memory_date' => 'nullable|date',
            'location' => 'nullable|string|max:255'
        ]);

        $memory = $request->user()->memories()->create($validated);
        return response()->json($memory, 201);
    }

    //update
    public function update(Request $request, int $id)
    {
        $memory = $request->user()->memories()->findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string',
            'type' => 'sometimes|required|string',
            'memory_date' => 'sometimes|nullable|date',
            'location' => 'sometimes|nullable|string|max:255'
        ]);

        $memory->update($validated);
        return response()->json($memory);
    }


    //destroy
    public function destroy(Request $request,int $id)
    {
        $memory = $request->user()->memories()->findOrFail($id);

        foreach($memory->files as $file){
            Storage::disk('public')->delete($file->file_path);
        }
            
        $memory->delete();

        return response()->json([ 'message'=>"Memory deleted successfully." ],200);
    }
}

