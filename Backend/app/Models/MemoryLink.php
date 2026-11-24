<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemoryLink extends Model
{
    protected $fillable = ['memory_id','title','url','description'];

    public function memory():BelongsTo
    {
        return $this->belongsTo(Memory::class);
    }
}
