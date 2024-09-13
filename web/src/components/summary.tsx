import { CheckCircle2, Plus } from 'lucide-react'

import { InOrbitIcon } from './in-orbit-icon'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { OutlineButton } from './ui/outline-button'
import { Separator } from './ui/separator'

export function Summary () {
  return (
    <div className='py-10 px-5 max-w-[480px] mx-auto flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <InOrbitIcon />
          <span className='text-lg font-semibold'>5 a 10 de agosto</span>
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
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className='flex items-center justify-between text-xs text-zinc-400'>
          <span>
            Você completou <span className='text-zinc-100'>8</span> de{' '}
            <span className='text-zinc-100'>15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>

        <Separator />

        <div className='flex flex-wrap gap-3'>
          <OutlineButton>
            <Plus className='size-4 text-zinc-600' />
            Meditar
          </OutlineButton>

          <OutlineButton>
            <Plus className='size-4 text-zinc-600' />
            Nadar
          </OutlineButton>

          <OutlineButton>
            <Plus className='size-4 text-zinc-600' />
            Praticar exercícios
          </OutlineButton>

          <OutlineButton>
            <Plus className='size-4 text-zinc-600' />
            Alimentar bem
          </OutlineButton>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='text-xl font-medium'>Sua semana</div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-medium'>
              Domingo{' '}
              <span className='text-zinc-400 text-xs'>(10 de agosto)</span>
            </h3>

            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-2'>
                <CheckCircle2 className='size-4 text-pink-500' />
                <span className='text-sm text-zinc-400'>
                  Você completou "<span>Acordar cedo</span>" às{' '}
                  <span>08:13h</span>
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <CheckCircle2 className='size-4 text-pink-500' />
                <span className='text-sm text-zinc-400'>
                  Você completou "<span>Alimentar bem</span>" às{' '}
                  <span>20:15h</span>
                </span>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-medium'>
              Segunda-feira{' '}
              <span className='text-zinc-400 text-xs'>(10 de agosto)</span>
            </h3>

            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-2'>
                <CheckCircle2 className='size-4 text-pink-500' />
                <span className='text-sm text-zinc-400'>
                  Você completou "<span>Acordar cedo</span>" às{' '}
                  <span>07:22h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
