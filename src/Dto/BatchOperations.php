<?php
declare(strict_types=1);

namespace App\Dto;

use App\Entity\CrawlOperation;

readonly final class BatchOperations
{
    /**
     * @param CrawlOperation[] $operations
     */
    public function __construct(public array $operations)
    {
    }
}
