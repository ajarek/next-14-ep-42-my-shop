import { auth } from '@/app/api/auth/auth'
import ProductForm from '@/components/ProductForm'
import { redirect } from 'next/navigation'
const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className='w-full flex flex-col gap-4 px-24 max-lg:px-4 max-sm:px-1'>
      <h1 className='text-2xl'>Get Products</h1>
      
    </div>
  )
}

export default Dashboard