<?php
declare(strict_types=1);

namespace App\Entity;

use App\Repository\CrawlOperationRepository;
use App\Type\CrawlOperation as CrawlOperationEnum;
use Doctrine\ORM\Mapping as ORM;

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

    #[ORM\ManyToOne(inversedBy: 'operations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CrawlRule $rule_id = null;

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

    public function getRuleId(): ?CrawlRule
    {
        return $this->rule_id;
    }

    public function setRuleId(?CrawlRule $rule_id): static
    {
        $this->rule_id = $rule_id;

        return $this;
    }
}
