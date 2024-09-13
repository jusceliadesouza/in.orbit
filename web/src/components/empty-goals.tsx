import { Plus } from 'lucide-react'

import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustrator.svg'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals () {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8 text-center'>
      <img src={logo} alt='in.orbit' />
      <img src={letsStart} alt='lets start' />
      <p className='text-zinc-300 leading-relaxed mx-w-80'>
        Você ainda não cadastrou nenhuma meta! Que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className='size-4' />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
