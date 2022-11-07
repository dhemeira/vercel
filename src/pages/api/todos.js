import { prisma } from '@/lib/prisma';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const data = JSON.parse(req.body);

    if (data.temppass == process.env.TEMPORARY_PASSWORD) {
      res.json({ message: await prisma.Todo.create({ data: { name: data.name } }) });
    }
    res.status(500).json({ message: 'Authentication failed' });
  } catch (error) {
    return res.status(500).json({ message: 'There was an unknown error' });
  }
}
