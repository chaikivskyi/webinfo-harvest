<?php

namespace App\Repository;

use App\Entity\CrawlOperation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CrawlOperation>
 *
 * @method CrawlOperation|null find($id, $lockMode = null, $lockVersion = null)
 * @method CrawlOperation|null findOneBy(array $criteria, array $orderBy = null)
 * @method CrawlOperation[]    findAll()
 * @method CrawlOperation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CrawlOperationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CrawlOperation::class);
    }

    /**
     * @return CrawlOperation[]
     */
    public function deleteExcludedRuleOperations(int $ruleId, array $ids): int
    {
        $queryBuilder = $this->createQueryBuilder('e');
        $queryBuilder->delete(CrawlOperation::class, 'e')
            ->andWhere('e.rule = :rule')
            ->setParameter('ids', $ids)
            ->setParameter('rule', $ruleId);

        if (!empty($ids)) {
            $queryBuilder->andWhere('e.id NOT IN (:ids)');
        }

        return $queryBuilder->getQuery()->getResult();
    }

    /**
     * @return CrawlOperation[] Returns an array of CrawlOperation objects
     */
    public function findByIds(array $ids): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.id IN (:val)')
            ->setParameter('val', $ids)
            ->orderBy('c.id', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

//    public function findOneBySomeField($value): ?CrawlOperation
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
