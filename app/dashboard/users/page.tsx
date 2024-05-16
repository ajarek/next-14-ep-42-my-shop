import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import connectToDb from '@/lib/connectToDb'
import { User } from '@/lib/models'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { DeleteProduct } from '@/components/DeleteProduct'
import { deleteUser } from '@/lib/action'


const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  await connectToDb()
  const users = await User.find({}).sort({ createdAt: -1 })
  return (
    <div className='w-full flex flex-col gap-4  '>
      <h1 className='text-2xl'>Get users</h1>
      <Table>
        <TableCaption>List of your latest users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className='text-left'>Email</TableHead>
            <TableHead className='text-center'>Is Admin</TableHead>
            <TableHead className='text-center'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className=''>
                <Image
                  src={user.img || 'https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg'}
                  width={30}
                  height={30}
                  alt='logo'
                  className='rounded-full'
                />
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell className='text-left'>{user.email}</TableCell>
              <TableCell className='text-center'>
                {user.isAdmin ? 'Yes' : 'No'}
              </TableCell>
              <TableCell className='flex gap-4 justify-center'>
                <Link
                   href={`/dashboard/edit-user?id=${(user._id).toString()}&username=${user.username}&email=${user.email}&img=${user.img}&isAdmin=${user.isAdmin}`}
                  className='flex items-center bg-green-600 text-white h-8  px-4 rounded-sm hover:bg-green-500 transition-colors'
                >
                  Edit
                </Link>
                <DeleteProduct _id={(user._id).toString()} deleteItem={deleteUser}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
