import { ModeToggle } from '@/components/ModeToggle'
import Links from './Links'
import MobileNav from './MobileNav'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'
import Link from 'next/link'

const Navbar = async () => {
  const session = await auth()
  const { user } = (session as any) || {}

  return (
    <div className='h-16 w-full  flex justify-between items-center gap-4 max-lg:px-8 max-sm:px-2 border-b  '>
      <div className='flex'>
        <Links />
        {user?.admin && (
          <Link
            href='/dashboard'
            className={`flex items-center justify-start gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition`}
          >
            Dashboard
          </Link>
        )}
      </div>
      <div className=' flex justify-between items-center italic gap-6  '>
        <Logout session={session} />
        <ModeToggle />
        <div className='w-full max-w-[264px] lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
