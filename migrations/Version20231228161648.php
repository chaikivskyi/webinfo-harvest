<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231228161648 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE crawl_operation ADD CONSTRAINT FK_E17F5BCC744E0351 FOREIGN KEY (rule_id) REFERENCES crawl_rule (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_E17F5BCC744E0351 ON crawl_operation (rule_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE crawl_operation DROP CONSTRAINT FK_E17F5BCC744E0351');
        $this->addSql('DROP INDEX IDX_E17F5BCC744E0351');
    }
}
