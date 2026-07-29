import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Busca todos os cadastros no banco
    const cadastros = await prisma.tbCadastro.findMany()
    return res.status(200).json(cadastros)
  }
}