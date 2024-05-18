import Footer from '@/components/Footer'
import React from 'react'

const Category = ({params}: {params: {category: string}}) => {
  const {category} = params
  return (
    <div>
      <h1>Category {category}</h1>
      <Footer/>
    </div>
  )
}

export default Category