'use client'
import Footer from '@/components/Footer'
import { useAppContext } from '@/Context/context'
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
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Cart = () => {
  const { cart, setCart } = useAppContext()
  const deleteItem = (id: number) => {
    const filteredCart = cart.filter((item: any) => item._id !== id)
    console.log(filteredCart)
    setCart(filteredCart)
  }
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-between px-24 max-lg:px-4'>
      {cart.length === 0 ? (
        <h1 className='text-center text-2xl'>Cart is empty</h1>
      ) : (
        <div>
          <h1 className='text-2xl'>Cart</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='max-sm:hidden'>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className='text-right max-sm:hidden'>Price $</TableHead>
                <TableHead className='text-center'>Quantity</TableHead>
                <TableHead className='text-center'>Together</TableHead>
                <TableHead className='text-center'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((ct: any) => (
                <TableRow key={ct._id}>
                  <TableCell className='max-sm:hidden'>
                    <Image
                      src={ct.img || ''}
                      width={40}
                      height={40}
                      alt='logo'
                    />
                  </TableCell>
                  <TableCell >{ct.title}</TableCell>
                  <TableCell className='text-right max-sm:hidden'>
                    {Number(ct.price).toFixed(2)}
                  </TableCell>
                  <TableCell className='text-center'>{ct.quantity}</TableCell>
                  <TableCell className='text-center '>
                    {Number(ct.price * ct.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell className='text-center'>
                    <Button size={'sm'} onClick={() => deleteItem(ct._id)}>❌</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='flex justify-end items-center px-4 my-4 gap-8'>
            <div className='text-primary text-xl font-semibold '>
              Total:{' '} 
              {cart
                .reduce((acc, curr: any) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
              $
            </div>
            <Link href={`/checkout?total=${cart.reduce((acc, curr: any) => acc + curr.price * curr.quantity, 0).toFixed(2)}`} className='w-fit flex items-center gap-4 bg-primary text-primary-foreground hover:bg-primary/80  rounded-sm px-2 py-1 transition'>Checkout</Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Cart
