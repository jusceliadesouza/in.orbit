import { CheckCircle2, Plus } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'

import { getSummary } from '../http/get-summary'

import { InOrbitIcon } from './in-orbit-icon'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

export function Summary () {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60
  })

  if (!data) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('DD MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('DD MMM')

  const completedPercentege = Math.round((data?.completed * 100) / data?.total)

  return (
    <div className='py-10 px-5 max-w-[480px] mx-auto flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <InOrbitIcon />
          <div className='flex items-center text-lg font-semibold space-x-2'>
            <span>{firstDayOfWeek}</span>
            <span>a</span>
            <span>{lastDayOfWeek}</span>
          </div>
        </div>
        <DialogTrigger asChild>
          <Button>
            <Plus className='size-4' />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className='flex flex-col gap-3'>
        <Progress max={15} value={8}>
          <ProgressIndicator style={{ width: `${completedPercentege}%` }} />
        </Progress>

        <div className='flex items-center justify-between text-xs text-zinc-400'>
          <span>
            Você completou{' '}
            <span className='text-zinc-100'>{data?.completed}</span> de{' '}
            <span className='text-zinc-100'>{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentege} %</span>
        </div>

        <Separator />

        <PendingGoals />

        <div className='flex flex-col gap-6'>
          <div className='text-xl font-medium'>Sua semana</div>

          {Object.entries(data.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')
            const formattedDate = dayjs(date).format('D [de] MMMM')

            return (
              <div key={date} className='flex flex-col gap-4'>
                <h3 className='font-medium'>
                  <span className='capitalize'>{weekDay}</span>{' '}
                  <span className='text-zinc-400 text-xs'>
                    ({formattedDate})
                  </span>
                </h3>

                <ul className='flex flex-col gap-3'>
                  {goals.map(goal => {
                    const time = dayjs(goal.completedAt).format('HH:mm')

                    return (
                      <li key={goal.id} className='flex items-center gap-2'>
                        <CheckCircle2 className='size-4 text-pink-500' />
                        <span className='text-sm text-zinc-400'>
                          Você completou "
                          <span className='text-zinc-100 font-medium'>
                            {goal.title}
                          </span>
                          " às <span className='text-zinc-100'>{time}h</span>
                          {/* <button
                            type='reset'
                            className='text-zinc-500 ml-2 text-sx underline underline-offset-2 leading-[160%] hover:text-zinc-400'
                          >
                            Desfazer
                          </button> */}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
