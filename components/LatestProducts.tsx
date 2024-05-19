import connectToDb from '@/lib/connectToDb'
import { Product } from '@/lib/models'
import CardProduct from './CardProduct'


const LatestProducts = async() => {
  await connectToDb()
  const products = (await Product.find({}).sort({ createdAt: -1}).limit(4)) as Product[]
  return (
    <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 '>
      {products.map((product) => (
        <CardProduct key={product._id} img={product.img} title={product.title} price={product.price} id={product._id.toString()} />
      ))}
    </div>
  )
}

export default LatestProducts