import { auth } from '@/app/api/auth/auth'
import connectToDb from '@/lib/connectToDb'
import { Product, User } from '@/lib/models'
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
import { DeleteProduct } from '@/components/DeleteProduct'
import { deleteProduct } from '@/lib/action'

const Dashboard = async () => {
  const session = await auth()
  const { user } = (session as any) || {}

  if (!user?.admin) {
    redirect('/')
  }
  await connectToDb()
  const products = (await Product.find({}).sort({ title: 1 })) as Product[]
  return (
    <div className='w-full flex flex-col gap-4  '>
      <h1 className='text-2xl'>Get Products</h1>
      <Table>
        <TableCaption>List of your latest products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=' max-sm:hidden'>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className='text-right'>Price $</TableHead>
            <TableHead className='text-center'>Category</TableHead>
            <TableHead className='text-center max-lg:w-16'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className='max-sm:hidden'>
                <Image
                  src={product.img || ''}
                  width={20}
                  height={20}
                  alt='logo'
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell className='text-right'>
                {Number(product.price).toFixed(2)}
              </TableCell>
              <TableCell className='text-center'>{product.category}</TableCell>
              <TableCell className='flex gap-4 max-lg:gap-1 justify-center items-center max-lg:flex-col max-lg:w-16'>
                <Link
                  href={`/dashboard/edit-product?id=${(product._id)?.toString()}&title=${
                    product.title
                  }&description=${product.description}&price=${
                    product.price
                  }&category=${product.category}&img=${product.img}`}
                  className='flex items-center h-8  px-4 rounded-sm hover:scale-105 transition'
                >
                  🖊️
                </Link>
                <DeleteProduct
                  _id={(product._id)?.toString()}
                  deleteItem={deleteProduct}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
