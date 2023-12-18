<?php
declare(strict_types=1);

namespace App\ApiOperation;

use ApiPlatform\Metadata\Operation\PathSegmentNameGeneratorInterface;

class SingularPathSegmentNameGenerator implements PathSegmentNameGeneratorInterface
{
    public function getSegmentName(string $name, bool $collection = true): string
    {
        return strtolower(preg_replace('~(?<=\\w)([A-Z])~', '-$1', $name));
    }
}
