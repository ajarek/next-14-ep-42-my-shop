import { auth } from '@/app/api/auth/auth'
import  ChartBar from '@/components/ChartBar'
import { redirect } from 'next/navigation'

const Analize = async() => {
  const session = await auth()
  const { user } = (session as any) || {}

  if (!user?.admin) {
    redirect('/')
  }

  const data = [
    {
      name: 'Food',
      Category: 200,
    },
    {
      name: 'Clothes',
      Category: 300,
    },
    {
      name: 'Electronics',
      Category: 500,
    },
    {
      name: 'Furniture',
      Category: 400,
    },
    {
      name: 'Other',
      Category: 150,
    },
  ]
  return (
    <div className='w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4'>
      <h1 className='text-3xl'>Sales Analysis</h1>
      <ChartBar data={data} />
    </div>
  )
}

export default Analize