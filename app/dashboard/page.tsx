import { auth } from '@/app/api/auth/auth'
import connectToDb from '@/lib/connectToDb'
import { Product } from '@/lib/models'
import { redirect } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  await connectToDb()
  const products = await Product.find({})
  return (
    <div className='w-full flex flex-col gap-4  '>
      <h1 className='text-2xl'>Get Products</h1>
      <Table>
        <TableCaption>List of your latest products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className='text-right'>Price $</TableHead>
            <TableHead className='text-center'>Category</TableHead>
            <TableHead className='text-center'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className=''>
                <Image src={product.img ||''} width={20} height={20} alt='logo'/>
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell className='text-right'>{Number(product.price).toFixed(2)}</TableCell>
              <TableCell className='text-center'>{product.category}</TableCell>
              <TableCell className='flex gap-4 justify-center'>
                <Link href='#' className='bg-green-600 text-white px-4 py-1 rounded-sm'>Edit</Link>
                <Link href='#' className='bg-red-600 text-white px-4 py-1 rounded-sm'>Delete</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
