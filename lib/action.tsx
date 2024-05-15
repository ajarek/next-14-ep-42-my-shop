'use server'

import connectToDb from './connectToDb'
import { User, Product } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

export const addUser = async (formData: User) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}


export const createProduct = async (formData: FormData) => {
 
  const rawFormData = {
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    category: formData.get('category'),
    img: formData.get('img'),
    
  }
  console.log('rawFormData' + rawFormData)
  try {
    await connectToDb()
    const newProduct = new Product(rawFormData)
    await newProduct.save()
    console.log('saved' + newProduct)
    revalidatePath('/dashboard')
  } catch (err) {
    console.log(err)
  }
}


export const deleteProduct = async (formData: FormData) => {
  const id = formData.get('_id')

  try {
    await connectToDb()
    await Product.findOneAndDelete({ _id: id })
    revalidatePath('/dashboard')
    console.log({ message: `Deleted product ${id}` })
    return { message: `Deleted product ${id}` }
  } catch (err) {
    return { message: 'Failed to delete product' }
  }
}


export const updateProduct = async (formData: FormData) => {
  const id = formData.get('_id')
  const title = formData.get('title')
  const description = formData.get('description')
  const price = formData.get('price')
  const img = formData.get('img')
  const category = formData.get('category')
  
  try {
    await connectToDb()
    await Product.findOneAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        price: price,
        category: category,
        img: img,
      }
    )
    revalidatePath(`/dashboard`)
    return { message: `Updated product ${id}` }
  } catch (err) {
    return { message: 'Failed to update to db' }
  } finally {
    redirect('/dashboard')
  }
}
