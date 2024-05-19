import connectToDb from '@/lib/connectToDb'
import { Product, User } from '@/lib/models'
import Footer from '@/components/Footer'
import CardProduct from '@/components/CardProduct'


const Products = async() => {
  await connectToDb()
  const products = (await Product.find({}).sort({ title: 1 })) as Product[]
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-12'>
      <h1 className='text-3xl'>All Products</h1>

      <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 py-4 '>
        {products.map((product) => (
          <CardProduct
            key={product._id}
            img={product.img}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    
      <Footer />
    </div>
  )
}

export default Products
