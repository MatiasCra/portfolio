import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const projects = await prisma.project.findMany({
    orderBy: { order: 'asc' },
    include: { techs: true },
  })
  res.status(200).json(projects)
}
