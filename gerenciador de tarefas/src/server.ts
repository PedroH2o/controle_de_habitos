// pesquisar sobre fastify
import Fastify from 'fastify'
import cors from '@fastify/cors' // integra o back end e o front end
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = Fastify()

app.register(cors)


//  para iniciar o banco de dados basta escrever "npx prisma studio"

// executa comandos do banco de dados
app.get('/', async () => {
     const habitos = await prisma.habit.findMany()
     return habitos

})

app.listen({
     port: 3333
}).then(() => {
     console.log("rodando")
})

// npm run dev para rodar o projeto