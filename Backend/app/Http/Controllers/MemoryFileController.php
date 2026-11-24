<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MemoryFileController extends Controller
{
    // Handles file operations for Photos, Videos, Voice Notes and Documents.

    public function store(Request $request, int $memoryId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $validated = $request->validate([
            'files' => 'required|array',
            'files.*' => 'required|file|max:20480',
            'folder' => 'required|in:photos,videos,voice,documents',
        ]);

        $uploadedFiles = [];

        foreach ($validated['files'] as $file) {

            $path = $file->store('memory-files', 'public');

            $uploadedFiles[] = $memory->files()->create([
                'file_name' => $file->getClientOriginalName(),
                'folder' => $validated['folder'],
                'file_path' => $path,
                'file_url' => asset('storage/' . $path),
                'file_type' => $file->getMimeType(),
                'file_size' => $file->getSize(),
            ]);
        }

        return response()->json([
            'message' => 'Files uploaded successfully.',
            'files' => $uploadedFiles,
        ], 201);
    }


    public function index(Request $request, int $memoryId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $files = $memory->files;

        return response()->json($files);
    }

    public function update(Request $request, int $memoryId, int $fileId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $file = $memory->files()->findOrFail($fileId);

        $validated = $request->validate([
            'file_name' => 'sometimes|required|string|max:255',
        ]);

        $file->update($validated);

        return response()->json($file);
    }

    public function destroy(Request $request, int $memoryId, int $fileId)
    {
        $memory = $request->user()->memories()->findOrFail($memoryId);

        $file = $memory->files()->findOrFail($fileId);

        Storage::disk('public')->delete($file->file_path);

        $file->delete();

        return response()->json([
            'message' => 'File deleted successfully.'
        ]);
    }
}
