-- CreateEnum
CREATE TYPE "StatusFormacao" AS ENUM ('CONCLUIDO', 'CURSANDO', 'INCOMPLETO');

-- CreateEnum
CREATE TYPE "NivelFluencia" AS ENUM ('BASICO', 'INTERMEDIARIO', 'AVANCADO', 'FLUENTE', 'NATIVO');

-- CreateTable
CREATE TABLE "tbcadastro" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "qtde_filhos" INTEGER DEFAULT 0,
    "estado_civil" TEXT,
    "nacionalidade" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "cep" TEXT,
    "telefone" TEXT,
    "email" TEXT NOT NULL,
    "resumoprofissional" TEXT,
    "objetivoprofissional" TEXT,

    CONSTRAINT "tbcadastro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tblinks" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "tblinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbrel_links" (
    "id" SERIAL NOT NULL,
    "idpessoa" INTEGER NOT NULL,
    "idlink" INTEGER NOT NULL,

    CONSTRAINT "tbrel_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbexperiencia_prof" (
    "id" SERIAL NOT NULL,
    "idpessoa" INTEGER NOT NULL,
    "razaosocial" TEXT NOT NULL,
    "cidade" TEXT,
    "uf" TEXT,
    "datainicio" TIMESTAMP(3) NOT NULL,
    "datafim" TIMESTAMP(3),
    "cargo" TEXT NOT NULL,
    "descricaocargo" TEXT NOT NULL,

    CONSTRAINT "tbexperiencia_prof_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbformacao" (
    "id" SERIAL NOT NULL,
    "idpessoa" INTEGER NOT NULL,
    "nomecurso" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "status" "StatusFormacao" NOT NULL,
    "datainicio" TIMESTAMP(3) NOT NULL,
    "datafim" TIMESTAMP(3),
    "cidade" TEXT,
    "estado" TEXT,

    CONSTRAINT "tbformacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbhabilidades" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tbhabilidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbferramentas" (
    "id" SERIAL NOT NULL,
    "idhabilidade" INTEGER NOT NULL,
    "nomeferramenta" TEXT NOT NULL,

    CONSTRAINT "tbferramentas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbidiomas" (
    "id" SERIAL NOT NULL,
    "idpessoa" INTEGER NOT NULL,
    "idioma" TEXT NOT NULL,
    "fluencia" "NivelFluencia" NOT NULL,

    CONSTRAINT "tbidiomas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbcadastro_cpf_key" ON "tbcadastro"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "tbcadastro_email_key" ON "tbcadastro"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tbrel_links_idpessoa_idlink_key" ON "tbrel_links"("idpessoa", "idlink");

-- AddForeignKey
ALTER TABLE "tbrel_links" ADD CONSTRAINT "tbrel_links_idpessoa_fkey" FOREIGN KEY ("idpessoa") REFERENCES "tbcadastro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbrel_links" ADD CONSTRAINT "tbrel_links_idlink_fkey" FOREIGN KEY ("idlink") REFERENCES "tblinks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbexperiencia_prof" ADD CONSTRAINT "tbexperiencia_prof_idpessoa_fkey" FOREIGN KEY ("idpessoa") REFERENCES "tbcadastro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbformacao" ADD CONSTRAINT "tbformacao_idpessoa_fkey" FOREIGN KEY ("idpessoa") REFERENCES "tbcadastro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbferramentas" ADD CONSTRAINT "tbferramentas_idhabilidade_fkey" FOREIGN KEY ("idhabilidade") REFERENCES "tbhabilidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbidiomas" ADD CONSTRAINT "tbidiomas_idpessoa_fkey" FOREIGN KEY ("idpessoa") REFERENCES "tbcadastro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
