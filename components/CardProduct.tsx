'use client'
 
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
interface ProductDetails {
  img: string
  title: string
  price: number
  id:string
}

const CardProduct = ({ img, title, price, id }: ProductDetails) => {
  const router =useRouter()
  return (
    <Card>
     
        <CardHeader>
          <div className='w-[200px] h-[200px] overflow-hidden rounded-sm shadow-lg'>
            <Image
              src={img}
              width={200}
              height={200}
              alt='product'
              className=' w-full h-full object-cover hover:scale-110 transition delay-150 duration-300 ease-in-out'
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription className='text-xl text-primary mt-4'>
            {price.toFixed(2)}$
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button id={id} onClick={(e:any)=>router.push(`/productId/${(e.target.id)}`)}>
            <Eye className='mr-2' /> Look
          </Button>
        </CardFooter>
      
    </Card>
  )
}

export default CardProduct
