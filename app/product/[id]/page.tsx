import React from 'react'

const ProductId = ({params}:{params:{id:string}}) => {
  return (
    <div>ProductId {params.id}</div>
  )
}

export default ProductId