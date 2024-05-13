'use client'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { usePathname } from 'next/navigation'

const LinkCart = () => {
  const pathname = usePathname()
  return (
    <Link
                href='/cart'
                className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-2 py-1 transition ${
                  pathname === '/cart' ? 'active ' : 'px-4'
                } `}
              >
                <ShoppingBag size={24} />
              </Link>
  )
}

export default LinkCart