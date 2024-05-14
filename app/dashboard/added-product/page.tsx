import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import ProductForm from '@/components/ProductForm'

const AddedProduct =async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className='w-full'>
      <ProductForm/>
    </div>
  )
}

export default AddedProduct