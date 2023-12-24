<?php
declare(strict_types=1);

namespace App\Controller;

use App\Dto\BatchOperations;
use App\Entity\CrawlOperation;
use App\Entity\CrawlRule;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

#[AsController]
class OperationsBulkUpdate
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Route(
        name: 'crawl-operation_bulk_update',
        path: 'api/crawl-operation/bulk',
        methods: ['POST'],
        defaults: [
            '_api_resource_class' => CrawlOperation::class,
            '_api_operation_name' => '_api_/crawl-operation_bulk_update',
        ],
    )]
    public function __invoke(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (!is_array($data)) {
            throw new BadRequestHttpException('Invalid data format. Expected an JSON.');
        }

        $result = [];
        $crawlRuleRepository = $this->entityManager->getRepository(CrawlRule::class);
        $crawlRule = $crawlRuleRepository->find($data[0]['ruleId']);

        foreach ($data as $item) {
            $operationId = $item['id'] ?? null;

            if ($operationId) {
                $operation = $this->entityManager->getRepository(CrawlOperation::class)->find($operationId);

                if (!$operation) {
                    continue;
                }

                $operation->setPosition($item['position'])
                    ->setRule($crawlRule);
                $this->entityManager->persist($operation);
                $result[] = $operation;
            } else {
                $operation = new CrawlOperation();
                $operation->setName(\App\Type\CrawlOperation::getValue($item['name']));
                $operation->setPosition($item['position'])
                    ->setRule($crawlRule);
                $this->entityManager->persist($operation);
                $result[] = $operation;
            }
        }

        $this->entityManager->flush();

        return new BatchOperations($result);
    }
}
