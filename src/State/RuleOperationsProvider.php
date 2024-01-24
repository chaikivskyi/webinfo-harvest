<?php
declare(strict_types=1);

namespace App\State;

use ApiPlatform\Doctrine\Orm\State\CollectionProvider;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\CrawlRule;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class RuleOperationsProvider implements ProviderInterface
{
    public function __construct(
        private CollectionProvider $collectionProvider,
        private EntityManagerInterface $entityManager,
        private Security $security
    ) {
    }

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        if (isset($uriVariables['ruleId']) && !$this->isAccessAllowed($uriVariables['ruleId'])) {
            throw new AccessDeniedException('Not Found');
        }

        return $this->collectionProvider->provide($operation, $uriVariables, $context);
    }

    private function isAccessAllowed(int $ruleId)
    {
        $rule = $this->entityManager->getRepository(CrawlRule::class)->find($ruleId);
        return $rule ? $rule->getUser() === $this->security->getUser() : true;
    }
}
