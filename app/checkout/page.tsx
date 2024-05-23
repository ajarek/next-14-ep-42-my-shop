import PaymentForm from '@/components/PaymentForm'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'


const Payment =async ({ searchParams }: { searchParams: { total: number } }) => {
  const { total } = searchParams
  const session = await auth()
  

  if (!session) {
    redirect('/register')
  }
  return (
    <>
      <PaymentForm total={total} /> 
      
    </>
  )
}
export default Payment
