import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const hashId = req.query.hashId as string
        const ads = await prisma.hash.findUnique({
            where: {
                ethAddress: hashId.toLowerCase(),
            },
            include: {
                counts: true,
            }
        })
        res.status(200).json({ads, error: false})
    } else {
        res.status(405).json({ message: 'Method not allowed', error: true })
    }
}