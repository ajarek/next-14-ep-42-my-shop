'use client'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/Context/context'
const LinkCart = () => {
  const pathname = usePathname()
  const { cart } = useAppContext()
  return (
    <Link
                href='/cart'
                className={`flex items-center  hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-2 py-1 transition ${
                  pathname === '/cart' ? 'active ' : 'px-4'
                } `}
              >
                <ShoppingBag size={24} /><sup className='flex items-center justify-center text-xs  w-6 h-6 bg-red-300 rounded-full '>{cart.length}</sup>
              </Link>
  )
}

export default LinkCart