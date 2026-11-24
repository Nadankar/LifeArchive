<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemoryLinkController extends Controller
{
    public function index(Request $request,int $memoryId)
    {
        $memory=$request->user()->memories()->findOrFail($memoryId);

        return response()->json($memory->links);
    }

    public function store(Request $request,int $memoryId)
    {
        $memory=$request->user()->memories()->findOrFail($memoryId);

        $validated=$request->validate([
            'title'=>'required|string|max:255',
            'url'=>'required|url',
            'description'=>'nullable|string'
        ]);

        $link=$memory->links()->create($validated);

        return response()->json($link,201);
    }

    public function update(Request $request,int $memoryId,int $linkId)
    {
        $memory=$request->user()->memories()->findOrFail($memoryId);

        $link=$memory->links()->findOrFail($linkId);

        $validated=$request->validate([
            'title'=>'sometimes|required|string|max:255',
            'url'=>'sometimes|required|string',
            'description'=>'sometimes|nullable|string'
        ]);
        
        $link->update($validated);

        return response()->json($link);

    }

    public function destroy(Request $request,int $memoryId,int $linkId)
    {
        $memory=$request->user()->memories()->findOrFail($memoryId);

        $link=$memory->links()->findOrFail($linkId);

        $link->delete();

        return response()->json([
            'message'=>'Link deleted successfully.'
        ]);
    }
}
