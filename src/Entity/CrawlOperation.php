<?php
declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use App\Controller\OperationsBulkUpdate;
use App\Dto\BatchOperations;
use App\Repository\CrawlOperationRepository;
use App\Type\CrawlOperation as CrawlOperationEnum;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource(
    operations: [
        new Post(
            name: 'crawl-operation',
            routeName: 'crawl-operation_bulk_update',
            uriTemplate: '/crawl-operation/bulk',
            controller: OperationsBulkUpdate::class,
            output: BatchOperations::class,
            input: BatchOperations::class
        )
    ]
)]
#[ApiResource(
    uriTemplate: '/crawl-rule/{ruleId}/operations',
    uriVariables: [
        'ruleId' => new Link(fromClass: CrawlRule::class, toProperty: 'rule'),
    ],
    operations: [ new GetCollection() ]
)]
#[ORM\Entity(repositoryClass: CrawlOperationRepository::class)]
class CrawlOperation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, enumType: CrawlOperationEnum::class)]
    private ?CrawlOperationEnum $name = null;

    #[ORM\Column]
    private ?int $position = null;

    #[ORM\ManyToOne(fetch: 'LAZY', inversedBy: 'operations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CrawlRule $rule = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?CrawlOperationEnum
    {
        return $this->name;
    }

    public function setName(CrawlOperationEnum $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): static
    {
        $this->position = $position;

        return $this;
    }

    public function getRule(): ?CrawlRule
    {
        return $this->rule;
    }

    public function setRule(?CrawlRule $rule): static
    {
        $this->rule = $rule;

        return $this;
    }
}
