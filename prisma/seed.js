import { PrismaClient } from '@prisma/client'
import { statuses } from './seeders/statuses.js'
import { roles } from './seeders/roles.js'

const prisma = new PrismaClient()

async function main() {

  for (const status of statuses) {
    const seedStatus = await prisma.statuses.create({
      data: status
    })
    console.log({seedStatus})
  }

  for (const role of roles) {
    const seedRole = await prisma.role.create({
      data: role
    })
    console.log({seedRole})
  }

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })