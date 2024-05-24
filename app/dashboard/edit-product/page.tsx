'use client'

import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { updateProduct } from '@/lib/action'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ProductUpdateForm = ({searchParams}: {  searchParams: {
    id: string | number
    title: string
    description: string
    price: number
    category: string
    img: string
  }
}) => {
  const ref = useRef<HTMLFormElement>(null)
  const {id, title, description, price, category, img} = searchParams
  return (
    <div className=' w-full flex flex-col  justify-center items-center max-sm:justify-start  gap-4 pb-6 '>
      <h1 className='text-2xl'>Update Product</h1>
      <form
        ref={ref}
        action={async (formData) => {
          await updateProduct(formData)
          ref.current?.reset()
        }}
        className='w-full flex flex-col gap-4 '
      > 
       <input
          type='hidden'
          name='_id'
          value={id}
        />
         <div className='flex flex-col gap-4'>
          <Label htmlFor='title'>Title</Label>
          <Input
            type='text'
            name='title'
            required
            className=''
            defaultValue={title}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='description'>Description:</Label>
          <Input
            type='text'
            name='description'
            required
            className=''
            defaultValue={description}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='price'>Price</Label>
          <Input
            type='number'
            name='price'
            required
            className=''
            step='0.01'
            defaultValue={price}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='price'>Image</Label>
          <Input
            type='text'
            name='img'
            required
            defaultValue={img}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='category'>Category:</Label>
          <Select
            defaultValue={category}
            name='category'
          >
            <SelectTrigger className=''>
              <SelectValue placeholder='Select a Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Shoes'>Shoes</SelectItem>
              <SelectItem value='Clothes'>Clothes</SelectItem>
              <SelectItem value='Electronics'>Electronics</SelectItem>
              <SelectItem value='Furniture'>Furniture</SelectItem>
              <SelectItem value='Other'>Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button
          type='submit'
          className=''
        >
          Update Product
        </Button>
      </form>
    </div>
  )
}

export default ProductUpdateForm  