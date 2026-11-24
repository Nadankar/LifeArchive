<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemoryNoteController extends Controller
{
    // Get all notes belonging to a memory
    public function index(Request $request, int $memoryId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        return response()->json($memory->notes);
    }

    // Save a new note
    public function store(Request $request, int $memoryId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string', 
            'content' => 'required|string',
        ]);
 
        $note = $memory->notes()->create($validated);

        return response()->json($note, 201);
    }

    // Update a note
    public function update(Request $request, int $memoryId, int $noteId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $note = $memory->notes()->findOrFail($noteId);

        $validated = $request->validate([
            'title' => 'sometimes|nullable|string|max:255',
            'description' => 'sometimes|nullable|string',
            'content' => 'sometimes|required|string',
        ]);

        $note->update($validated);

        return response()->json($note);
    }

    // Delete a note
    public function destroy(Request $request, int $memoryId, int $noteId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $note = $memory->notes()->findOrFail($noteId);

        $note->delete();

        return response()->json([
            'message' => 'Note deleted successfully.'
        ]);
    }
}
