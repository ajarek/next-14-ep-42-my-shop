import Aside from '@/components/Aside'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-[calc(100vh-64px)]  justify-start items-start  px-12  gap-16  '>
      
       <Aside/>   
      {children}
      
    </div>
  );
}