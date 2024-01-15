<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/{any}', name: 'app_main', methods: ['GET'], requirements: ['any' => '.*'])]
    public function index(): Response
    {
        return $this->render('main.html.twig');
    }
}
