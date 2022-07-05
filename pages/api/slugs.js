import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const slugs = await prisma.project.findMany({
    select: { slug: true },
  })
  res.status(200).json(slugs)
}
