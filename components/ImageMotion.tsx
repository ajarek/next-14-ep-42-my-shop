'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
const ImageMotion = () => {
  return (
    <div className='px-4'>
      <motion.div
        className=''
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src='/images/header.jpg'
          width={600}
          height={400}
          alt='logo'
          className='rounded-sm shadow-lg'
        />
      </motion.div>
    </div>
  )
}

export default ImageMotion
