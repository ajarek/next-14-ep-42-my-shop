import Footer from '@/components/Footer'
import LatestProducts from '@/components/LatestProducts'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-start px-24 py-8 gap-8'>
      <div className='grid grid-cols-2 gap-4 max-lg:grid-cols-1 '>
        <div className='flex flex-col  justify-evenly px-4'>
         
          <h1 className='text-4xl'>100% satisfaction with purchases made in our store.</h1>
          <p className='text-lg'>See our entire assortment and choose something for yourself.</p>
          <p className='text-lg'>Fast & Free Shipping. <span className='text-gray-400 text-sm'>(over $150)</span></p>
          <Link href={'/products'} className={`w-fit flex items-center gap-4 bg-primary text-primary-foreground hover:bg-primary/80  rounded-sm px-2 py-1 transition `}>All Products</Link>
        </div>
        <div className='px-4'>
         
          <Image
            src='/images/header.jpg'
            width={600}
            height={400}
            alt='logo'
            className='rounded-sm shadow-lg'
          />
        </div>
      </div>
      <div className=''>
        <h1 className='text-3xl'>Our Latest Products</h1>
        <LatestProducts />
      </div>
      <Footer/>
    </main>
  )
}
