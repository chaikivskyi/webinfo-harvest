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

//    /**
//     * @return CrawlOperation[] Returns an array of CrawlOperation objects
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
