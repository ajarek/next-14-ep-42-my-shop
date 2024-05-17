import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import ProductForm from '@/components/ProductForm'

const AddedProduct =async () => {
  const session = await auth()
  const { user } = (session as any) || {}

  if (!user?.admin) {
    redirect('/')
  }
  return (
    <div className='w-full'>
      <ProductForm/>
    </div>
  )
}

export default AddedProduct