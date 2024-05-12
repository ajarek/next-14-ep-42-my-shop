import { ModeToggle } from '@/components/ModeToggle'
import Links from './Links'
import MobileNav from './MobileNav'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'
import Link from 'next/link'

const Navbar = async () => {
  const session = await auth()
  return (
    <div className='h-16 w-full  flex justify-between items-center gap-4 px-8 '>
      
      
      <Links />
      <div className='flex justify-between items-center italic gap-6 ml-6'>
        <Logout session={session} />
        {session && (
        <Link
        href='/dashboard'
        className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition `}
      >
        Dashboard
      </Link>
      )}
        <ModeToggle />
      </div>
      
      <div className='"w-full max-w-[264px] lg:hidden'>
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar
