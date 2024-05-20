'use client'
import React , { useState } from 'react'
import { Button } from './ui/button'
import { Plus, Minus } from 'lucide-react'

const Counter = () => {
  return (
    <div className='flex items-center gap-1'>
      <Button className='px-2'><Plus /></Button>
      <div className='w-[40px] h-[40px] rounded-lg text-primary font-semibold text-2xl flex items-center border-2 border-primary justify-center '>1</div>
      <Button className='px-2'><Minus /></Button>
    </div>
  )
}

export default Counter