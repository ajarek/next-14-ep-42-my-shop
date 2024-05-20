import Counter from "@/components/Counter"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/models"
import Image from "next/image"

const ProductId = ({searchParams}:{searchParams:Product}) => {
  const {_id, title, description, price, category, img} = searchParams
  return (
    <div className='min-h-[calc(100vh-64px)] grid grid-cols-2 place-items-center '>
          <div className="overflow-hidden">
            <Image src={img} alt={title} width={300} height={300} className="object-cover hover:scale-110 transition delay-150 duration-300 ease-in-out "/>
          </div>
          <div className="flex flex-col gap-4 text-gray-500">
            <h1>Product title: <span className="text-2xl text-primary ">{title}</span></h1>
            <p>Category: <span className=" text-primary ">{category}</span></p>
            <p>Description:<br /><span className=" text-primary ">{description}</span></p>
            <p>Price: <span className="text-2xl text-primary ">{Number(price).toFixed(2)}$</span></p>
            <Counter />
            <Button  className="w-fit">Add to cart</Button>
          </div>
    </div>
  )
}

export default ProductId