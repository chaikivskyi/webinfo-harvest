<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231212154254 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE crawl_operation_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE crawl_rule_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE crawl_operation (id INT NOT NULL, rule_id_id INT NOT NULL, name VARCHAR(255) NOT NULL, position INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_E17F5BCCB176BE97 ON crawl_operation (rule_id_id)');
        $this->addSql('CREATE TABLE crawl_rule (id INT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE crawl_operation ADD CONSTRAINT FK_E17F5BCCB176BE97 FOREIGN KEY (rule_id_id) REFERENCES crawl_rule (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE crawl_operation_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE crawl_rule_id_seq CASCADE');
        $this->addSql('ALTER TABLE crawl_operation DROP CONSTRAINT FK_E17F5BCCB176BE97');
        $this->addSql('DROP TABLE crawl_operation');
        $this->addSql('DROP TABLE crawl_rule');
    }
}
