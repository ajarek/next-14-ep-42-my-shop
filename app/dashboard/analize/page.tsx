import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Analize = async() => {
  const session = await auth()
  const { user } = (session as any) || {}

  if (!user?.admin) {
    redirect('/')
  }
  return (
    <div>Analize</div>
  )
}

export default Analize