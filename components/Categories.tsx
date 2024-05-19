import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

import React from 'react'

const Categories = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='w-fit max-lg:w-full hover:bg-primary hover:text-primary-foreground max-lg:text-left hover:rounded-sm  rounded-sm px-4 py-1 transition '>
        Categories
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={'/categories/shoes'}>
          <DropdownMenuItem>Shoes</DropdownMenuItem>
        </Link>
        <Link href={'/categories/clothes'}>
          <DropdownMenuItem>Clothes</DropdownMenuItem>
        </Link>
        <Link href={'/categories/electronics'}>
          <DropdownMenuItem>Electronics</DropdownMenuItem>
        </Link>
        <Link href={'/categories/furniture'}>
          <DropdownMenuItem>Furniture</DropdownMenuItem>
        </Link>
        <Link href={'/categories/other'}>
          <DropdownMenuItem>Other</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Categories
