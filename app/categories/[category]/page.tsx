import React from 'react'

const Category = ({params}: {params: {category: string}}) => {
  const {category} = params
  return (
    <div>Category {category}</div>
  )
}

export default Category