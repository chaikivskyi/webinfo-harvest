<?php
declare(strict_types=1);

namespace App\Type;

enum CrawlOperationEnum: string
{
    case WAIT = 'wait';
    case CLICK = 'click';
    case READ_TEXT = 'read_text';
}
