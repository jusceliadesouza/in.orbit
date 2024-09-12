import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'

import { createGoalRoute } from './routes/create-goal'
import { createCompletionRoute } from './routes/create-completion'
import { getPendingGoalsRoute } from './routes/get-pending-goal'
import { getWeekSummaryRoute } from './routes/get-week-summary'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Cria Metas
app.register(createGoalRoute)
// Completar metas
app.register(createCompletionRoute)
// Cria Metas Pendentes
app.register(getPendingGoalsRoute)
// 
app.register(getWeekSummaryRoute)

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
