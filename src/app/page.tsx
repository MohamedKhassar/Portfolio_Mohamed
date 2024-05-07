import About from '@/components/About'
import Home from '@/components/Home'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col lg:gap-y-10 gap-y-48'>
      <Home />
      <div className='flex justify-center'>
        <hr className='border-gray-700 dark:border-white w-[70%] rounded-md' />
      </div>
      <About />
    </div>
  )
}

export default page
