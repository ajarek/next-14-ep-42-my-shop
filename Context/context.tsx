'use client'
import { createContext, useState, useContext } from 'react'
import { Product } from '../lib/models'
type ContextValue = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
}

const AppContext = createContext({} as ContextValue)

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState<number>(1)
  const [cart, setCart] = useState<Product[]>([])
  return (
    <AppContext.Provider value={{ count, setCount, cart, setCart }}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => useContext(AppContext)
