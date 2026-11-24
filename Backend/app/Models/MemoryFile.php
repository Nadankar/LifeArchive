<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemoryFile extends Model
{
    protected $fillable = ['memory_id','file_name','folder','file_path','file_url','file_type','file_size'];

    public function memory():BelongsTo
    {
        return $this->belongsTo(Memory::class);
    }
}
