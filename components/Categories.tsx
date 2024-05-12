import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

import React from 'react'

const Categories = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
  <DropdownMenuContent>
    <Link href={'/categories/shoes'}>
    <DropdownMenuLabel>Shoes</DropdownMenuLabel>
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