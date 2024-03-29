<?php
declare(strict_types=1);

namespace App\Controller;

use App\Dto\BatchOperations;
use App\Entity\CrawlOperation;
use App\Entity\CrawlRule;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;

#[AsController]
class OperationsBulkUpdateController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {
    }

    public function __invoke(#[MapRequestPayload]BatchOperations $query, int $ruleId)
    {
        $result = [];
        $crawlRuleRepository = $this->entityManager->getRepository(CrawlRule::class);
        $operationRepository = $this->entityManager->getRepository(CrawlOperation::class);
        $crawlRule = $crawlRuleRepository->find($ruleId);
        $operationsIds = $this->getIds($query->getOperations());

        $this->entityManager->beginTransaction();

        try {
            $operationRepository->deleteExcludedRuleOperations($ruleId, $operationsIds);
            $operations = $operationRepository->findByIds($operationsIds);

            foreach ($query->getOperations() as $item) {
                if ($item->getId()
                    && ($operation = $this->getOperation($operations, $item->getId()))
                    && $operation->getRule()->getId() === $ruleId
                ) {
                    $entity = $operation;
                } else {
                    $entity = $item;
                }

                $entity->setPosition($item->getPosition())
                    ->setName($item->getName())
                    ->setSelector($item->getSelector())
                    ->setRule($crawlRule);

                $this->entityManager->persist($entity);
                $result[] = $entity;
            }

            $this->entityManager->flush();
            $this->entityManager->commit();
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            throw $e;
        }

        return new BatchOperations($result);
    }

    private function getOperation(array $operations, int $id): ?CrawlOperation
    {
        foreach ($operations as $operation) {
            if ($operation->getId() === $id) {
                return $operation;
            }
        }

        return null;
    }

    private function getIds(array $items)
    {
        $ids = [];

        foreach ($items as $item) {
            if ($item->getId()) {
                $ids[] = $item->getId();
            }
        }

        return $ids;
    }
}
