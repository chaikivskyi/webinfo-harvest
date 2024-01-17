<?php
declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Put;
use App\Repository\CrawlRuleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource(security: "is_granted('ROLE_USER')")]
#[Delete(security: "is_granted('ROLE_ADMIN')")]
#[Get(security: "is_granted('ROLE_ADMIN') or object.owner == user")]
#[Patch(security: "is_granted('ROLE_ADMIN') or object.owner == user")]
#[Put(security: "is_granted('ROLE_ADMIN') or object.owner == user")]
#[GetCollection(security: "is_granted('ROLE_ADMIN')")]
#[ORM\Entity(repositoryClass: CrawlRuleRepository::class)]
class CrawlRule
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    #[ORM\OneToMany(targetEntity: CrawlOperation::class, orphanRemoval: true, mappedBy: 'rule', fetch: 'LAZY')]
    private Collection $operations;

    #[Orm\ManyToOne(targetEntity: User::class, fetch: 'LAZY')]
    #[Orm\JoinColumn(name: 'user_id', referencedColumnName: 'id')]
    private ?User $user = null;

    public function __construct()
    {
        $this->operations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function setUser(User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, CrawlOperation>
     */
    public function getOperations(): Collection
    {
        return $this->operations;
    }

    public function addOperation(CrawlOperation $operation): static
    {
        if (!$this->operations->contains($operation)) {
            $this->operations->add($operation);
            $operation->setRuleId($this);
        }

        return $this;
    }

    public function removeOperation(CrawlOperation $operation): static
    {
        if ($this->operations->removeElement($operation)) {
            // set the owning side to null (unless already changed)
            if ($operation->getRuleId() === $this) {
                $operation->setRuleId(null);
            }
        }

        return $this;
    }
}
