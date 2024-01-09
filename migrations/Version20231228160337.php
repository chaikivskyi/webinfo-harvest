<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231228160337 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE crawl_operation DROP CONSTRAINT fk_e17f5bcc744e0351');
        $this->addSql('DROP INDEX idx_e17f5bcc744e0351');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE crawl_operation ADD CONSTRAINT fk_e17f5bcc744e0351 FOREIGN KEY (rule_id) REFERENCES crawl_rule (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_e17f5bcc744e0351 ON crawl_operation (rule_id)');
    }
}
