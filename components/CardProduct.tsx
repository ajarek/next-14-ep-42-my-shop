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
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import { Product } from '@/lib/models'
import LinkCart from './LinkCart'

const CardProduct = ({
  img,
  title,
  price,
  _id,
  description,
  category,
  createdAt,
}: Product) => {
  return (
    <Card>
      <CardHeader>
        <div className='w-[200px] h-[200px] max-sm:w-full max-sm:h-full overflow-hidden rounded-sm shadow-lg'>
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
        <Link
          href={`/productId?_id=${_id?_id.toString():''}&title=${title}&price=${price}&img=${img}&category=${category}&description=${description}&createdAt=${createdAt} `}
          className='w-fit flex items-center gap-4 bg-primary text-primary-foreground hover:bg-primary/80  rounded-sm px-2 py-1 transition '
        >
          <Eye/> Look
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardProduct
