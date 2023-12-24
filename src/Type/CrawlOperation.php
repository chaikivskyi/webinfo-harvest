<?php
declare(strict_types=1);

namespace App\Type;

enum CrawlOperation: string
{
    case WAIT = 'wait';
    case CLICK = 'click';
    case READ_TEXT = 'read_text';

    public static function getValue(string $value): self {
        return match ($value) {
            'wait' => self::WAIT,
            'click' => self::CLICK,
            'read_text' => self::READ_TEXT,
        };
    }
}
