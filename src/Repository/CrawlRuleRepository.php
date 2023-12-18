<?php
declare(strict_types=1);

namespace App\Repository;

use App\Entity\CrawlRule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CrawlRule>
 *
 * @method CrawlRule|null find($id, $lockMode = null, $lockVersion = null)
 * @method CrawlRule|null findOneBy(array $criteria, array $orderBy = null)
 * @method CrawlRule[]    findAll()
 * @method CrawlRule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CrawlRuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CrawlRule::class);
    }

    public function getList()
    {
        return $this->createQueryBuilder('main')
            ->orderBy('main.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return CrawlRule[] Returns an array of CrawlRule objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CrawlRule
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
