import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const slug = req.query.slug
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { techs: true, demo: true },
  })
  res.status(200).json(project)
}
