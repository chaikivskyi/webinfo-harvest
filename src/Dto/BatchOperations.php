<?php
declare(strict_types=1);

namespace App\Dto;

readonly final class BatchOperations
{
    /**
     * @param \App\Entity\CrawlOperation[] $operations
     */
    public function __construct(private array $operations)
    {
    }

    public function getOperations()
    {
        return $this->operations;
    }
}
