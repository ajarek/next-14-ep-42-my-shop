'use client'

import { Button } from '@/components/ui/button'



export function DeleteProduct({ _id, deleteItem }: { _id: string, deleteItem: Function }) {
  return (
    <>
      <form
        action={async (formData) => {
          const res = await deleteItem(formData)
        }}
      >
        <input
          type='hidden'
          name='_id'
          value={_id}
        />

        <Button
          className='bg-red-600 text-white  rounded-sm hover:bg-red-500 transition-colors'
          type='submit'
          size='sm'
        >Delete
        </Button>
      </form>
    </>
  )
}