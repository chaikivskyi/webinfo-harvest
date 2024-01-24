<?php
declare(strict_types=1);

namespace App\EventListener;

use App\Entity\CrawlRule;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Symfony\Bundle\SecurityBundle\Security;

#[AsEntityListener(event: Events::prePersist, method: 'prePersist', entity: CrawlRule::class)]
class CrawlRuleListener
{
    public function __construct(private Security $security)
    {
    }

    public function prePersist(CrawlRule $rule)
    {
        if (!$rule->getUser()) {
            $rule->setUser($this->security->getUser());
        }
    }
}
