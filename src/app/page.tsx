import About from '@/components/About'
import Home from '@/components/Home'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 place-items-center lg:gap-y-4 items-center'>
      <Home />
      <hr className='my-28 mt-64 lg:my-0 border-gray-700 dark:border-white w-[70%] rounded-md' />
      <About />
    </div>
  )
}

export default page
