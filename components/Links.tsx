'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Categories from '@/components/Categories'

const Links = () => {
  const pathname = usePathname()
  return (
    <div
      className={'w-full  flex items-center  justify-between  gap-6    italic'}
    >
      <Link
        href='/dashboard'
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

      <div className='max-lg:hidden flex '>
        <div className='flex items-center gap-6'>
          

          <Link
            href='/'
            className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
              pathname === '/dashboard/analyzes' ? 'active ' : 'px-4'
            }`}
          >
            Home
          </Link>
          <Link
            href='/products'
            className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
              pathname === '/dashboard/data-sheet' ? 'active ' : 'px-4'
            }`}
          >
            All Products
          </Link>
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Links
