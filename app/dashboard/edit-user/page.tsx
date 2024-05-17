'use client'

import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { updateUser } from '@/lib/action'


const UserUpdateForm = ({
  searchParams,
}: {
  searchParams: {
    _id: string | number
    username: string
    email: string
    img: string
    isAdmin: boolean
  }
}) => {
  const ref = useRef<HTMLFormElement>(null)
  const { _id, username, email, img, isAdmin } = searchParams
 
  return (
    <div className=' w-full flex flex-col  justify-center items-center max-sm:justify-start  gap-4  '>
      <h1 className='text-2xl'>Update User</h1>
      <form
        ref={ref}
        action={async (formData) => {
          await updateUser(formData)
          ref.current?.reset()
        }}
        className='w-full flex flex-col gap-4 '
      >
        <input
          type='hidden'
          name='_id'
          value={_id}
        />
        <div className='flex flex-col gap-4'>
          <Label htmlFor='username'>Username</Label>
          <Input
            type='text'
            name='username'
            required
            className=''
            defaultValue={username}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='email'>Email:</Label>
          <Input
            type='text'
            name='email'
            required
            className=''
            defaultValue={email}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='img'>Image</Label>
          <Input
            type='text'
            name='img'
            className=''
            defaultValue={img}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='isAdmin'>Is Admin</Label>
          <Input
            type='text'
            name='isAdmin'
            required
            defaultValue={isAdmin.toString()}
          />
        </div>

        <Button
          type='submit'
          className=''
        >
          Update User
        </Button>
      </form>
    </div>
  )
}

export default UserUpdateForm
