'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus, Minus } from 'lucide-react'
import { useAppContext } from '@/Context/context'
const Counter = () => {
  const { count, setCount } = useAppContext()
  return (
    <div className='flex items-center gap-1'>
      <Button
        className='px-2'
        onClick={() => setCount(count + 1)}
      >
        <Plus />
      </Button>
      <div className='w-[40px] h-[40px] rounded-lg text-primary font-semibold text-2xl flex items-center border-2 border-primary justify-center '>
        {count}
      </div>
      <Button
        className='px-2'
        onClick={() => {
          setCount(count <= 1 ? 1 : count - 1)
        }}
      >
        <Minus />
      </Button>
    </div>
  )
}

export default Counter
