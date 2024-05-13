'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Categories from './Categories'
import LinkCart from './LinkCart'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden'
      >
        <SheetHeader>
          <Link
            href='/'
            className='flex items-center gap-2 max-sm-gap-1'
          >
            <Image
              src='/images/store.svg'
              width={40}
              height={40}
              alt='logo'
            />
            <h1 className='font-semibold text-xl text-primary'>MyShop</h1>
          </Link>
        </SheetHeader>
        <SheetClose asChild>
          <div className='flex h-full flex-col gap-6 pt-8 '>
            <SheetClose asChild></SheetClose>
            <SheetClose asChild></SheetClose>
            <SheetClose asChild>
              <Link
                href='/products'
                className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
                  pathname === '/data-sheet' ? 'active ' : 'px-4'
                }`}
              >
                All Products
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <div className=''>
                <Categories />
              </div>
            </SheetClose>
            <SheetClose asChild>
              <LinkCart />
            </SheetClose>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
