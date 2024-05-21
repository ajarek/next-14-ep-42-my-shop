import mongoose from 'mongoose'

export type User = {
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type Product = {
  _id?: string
  title:string
  description?: string
  price: number
  category?: string
  img:string
  createdAt?: Date
  quantity?:number
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const productSchema =new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
},
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Product = mongoose.models?.Product || mongoose.model('Product', productSchema)
