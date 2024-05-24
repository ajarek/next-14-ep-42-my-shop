'use client'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Aside = () => {
  const pathname = usePathname()
  return (
    <aside className='w-56  max-lg:h-16  max-lg:w-full  flex flex-wrap flex-col max-lg:flex-row gap-6 max-lg:justify-center border-r-2 pr-8 shadow-lg '>
      <h1 className='text-2xl max-lg:hidden'>Menu</h1>
      <Link
        href='/dashboard/add-product'
        className={`flex items-center hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm  py-1 px-1 transition ${
          pathname === '/dashboard/add-product' ? 'active ' : 'px-1'
        }`}
      >
        Add Product
      </Link>
      <Link
        href='/dashboard'
        className={`flex items-center hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm  py-1 px-1 transition ${
          pathname === '/dashboard' ? 'active ' : 'px-1'
        }`}
      >
        Get Product
      </Link>
      <Link
        href='/dashboard/add-user'
        className={`flex items-center hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm  py-1 px-1 transition ${
          pathname === '/dashboard/add-user' ? 'active ' : 'px-1'
        }`}
      >
        Add User
      </Link>
      <Link
        href='/dashboard/users'
        className={`flex items-center hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm  py-1 px-1 transition ${
          pathname === '/dashboard/users' ? 'active ' : 'px-1'
        }`}
      >
        Get User
      </Link>
      <Link
        href='/dashboard/analize'
        className={`flex items-center hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm  py-1 px-1 transition ${
          pathname === '/dashboard/analize' ? 'active ' : 'px-1'
        }`}
      >
        Analize
      </Link>
    </aside>
  )
}

export default Aside
