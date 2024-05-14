import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Analize = async() => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div>Analize</div>
  )
}

export default Analize