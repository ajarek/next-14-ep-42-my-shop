import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const AddUser = () => {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center '>
      <h1 className='text-2xl'>Add User</h1>
      <RegisterForm/>
    </div>
  )
}

export default AddUser