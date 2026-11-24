<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemoryNote extends Model
{
    protected $fillable = ['memory_id','title','description','content'];

    public function memory():BelongsTo
    {
        return $this->belongsTo(Memory::class);
    }
}
