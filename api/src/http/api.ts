import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from 'fastify-type-provider-zod'
import z from 'zod'

import { createGoal } from '../functions/create-goal'
import { getWeekPendingGoals } from '../functions/get-week-pending-goals'
import { createGoalCompletion } from '../functions/create-goal-completion'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Cria Metas
app.post(
  '/goals',
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7)
      })
    }
  },
  async request => {
    const { title, desiredWeeklyFrequency } = request.body

    const result = await createGoal({
      title,
      desiredWeeklyFrequency
    })

    return result
  }
)

// Completar metas
app.post(
  '/completions',
  {
    schema: {
      body: z.object({
        goalId: z.string()
      })
    }
  },
  async request => {
    const { goalId } = request.body

    const result = await createGoalCompletion({
      goalId
    })
  }
)

// Cria Metas Pendentes
app.get('/pending-goals', async () => {
  const { pendingGoals } = await getWeekPendingGoals()

  return { pendingGoals }
})

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
