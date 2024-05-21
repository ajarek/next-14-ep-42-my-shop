'use client'
import Counter from "@/components/Counter"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/models"
import Image from "next/image"
import {useAppContext} from '@/Context/context'
import { useRouter } from 'next/navigation'

const ProductId = ({searchParams}:{searchParams:Product}) => {
  const router = useRouter()
  const {_id, title, description, price, category, img} = searchParams
  const { count, setCount ,setCart} = useAppContext()

  const addToCart=()=>{
    setCart((prevCart) => [...prevCart, {
      img: img,
      title: title,
      price: price,
      quantity: count
    }])
    setCount(1)
    router.push('/cart')
  }
  return (
    <div className='min-h-[calc(100vh-64px)] grid grid-cols-2 max-lg:grid-cols-1 place-items-center gap-4 max-lg:px-4 max-lg:py-4'>
          <div className="overflow-hidden">
            <Image src={img} alt={title} width={300} height={300} className="object-cover hover:scale-110 transition delay-150 duration-300 ease-in-out "/>
          </div>
          <div className="flex flex-col gap-4 text-gray-500">
            <h1>Product title: <span className="text-2xl text-primary ">{title}</span></h1>
            <p>Category: <span className=" text-primary ">{category}</span></p>
            <p>Description:<br /><span className=" text-primary ">{description}</span></p>
            <p>Price: <span className="text-2xl text-primary ">{Number(price).toFixed(2)}$</span></p>
            <Counter />
            <Button  className="w-fit" onClick={addToCart}>Add to cart</Button>
          </div>
    </div>
  )
}

export default ProductId