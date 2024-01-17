<?php
declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use App\Controller\OperationsBulkUpdateController;
use App\Dto\BatchOperations;
use App\Repository\CrawlOperationRepository;
use App\State\RuleOperationsProvider;
use App\Type\CrawlOperationEnum;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;

#[ApiResource(
    security: "is_granted('ROLE_USER')",
    uriTemplate: '/crawl-rule/{ruleId}/operations',
    uriVariables: [
        'ruleId' => new Link(fromClass: CrawlRule::class, toProperty: 'rule'),
    ],
    provider: RuleOperationsProvider::class,
    operations: [
        new GetCollection(),
        new Post(
            name: 'crawl-operation',
            controller: OperationsBulkUpdateController::class,
            output: BatchOperations::class,
            input: BatchOperations::class,
            openapiContext: [
                'summary' => 'Bulk create, update, or delete CrawlOperation resources.'
            ],
        )
    ]
)]
#[ApiFilter(OrderFilter::class, properties: ['id', 'position'], arguments: ['orderParameterName' => 'order'])]
#[ORM\Entity(repositoryClass: CrawlOperationRepository::class)]
class CrawlOperation
{
    #[ApiProperty(writable: true)]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(enumType: CrawlOperationEnum::class)]
    private ?CrawlOperationEnum $name = null;

    #[ORM\Column]
    private ?int $position = null;

    #[ORM\ManyToOne(fetch: 'LAZY', inversedBy: 'operations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CrawlRule $rule = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $selector = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId($id): static
    {
        $this->id = $id;

        return $this;
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

    public function getPosition(): int
    {
        return (int)$this->position;
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

    public function getSelector(): ?string
    {
        return $this->selector;
    }

    public function setSelector(?string $selector): static
    {
        $this->selector = $selector;

        return $this;
    }
}
