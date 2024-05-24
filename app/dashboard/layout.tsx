import Aside from '@/components/Aside'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-[calc(100vh-64px)]  max-lg:flex-col justify-start items-start  px-12 max-lg:px-2  gap-16  '>
      
       <Aside/>   
      {children}
      
    </div>
  );
}