'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Categories from '@/components/Categories'
import LinkCart from './LinkCart'

const Links = () => {
  const pathname = usePathname()
  return (
    <div className='max-lg:hidden flex  '>
      <div className='flex items-center gap-6'>
        <Link
          href='/'
          className='flex items-center gap-2 max-sm-gap-1'
        >
          <Image
            src='/images/store.svg'
            width={30}
            height={30}
            alt='logo'
          />
          <h1 className='font-semibold text-xl text-primary'>MyShop</h1>
        </Link>

        <Link
          href='/products'
          className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
            pathname === '/products' ? 'active ' : 'px-4'
          }`}
        >
          All Products
        </Link>
        <Categories />
        <LinkCart />
      </div>
    </div>
  )
}

export default Links
