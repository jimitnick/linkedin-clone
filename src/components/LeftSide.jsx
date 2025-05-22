import React from 'react'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Recommendations from './Recommendations'

const LeftSide = () => {
  return (
    <>
        <div>
            <Recommendations />
            <div className='flex flex-col w-[300px] bg-transparent h-[200px] justify-center items-center gap-4'>
                <div className='flex gap-4 text-gray-500'>
                    <a href = "#" className='text-sm'>About</a>
                    <a href = "#" className='text-sm'>Accessibility</a>
                    <a href = "#" className='text-sm'>Help Center</a>
                </div>
                <div className='flex gap-4 text-gray-500'>
                    <div className='flex gap-2 items-center'>
                        <a href = "#" className='text-sm'>Privacy & Terms</a>
                        <ArrowDownIcon className='h-3 w-3 text-zinc-950 font-extrabold'/>
                    </div>
                    <a href = "#" className='text-sm'>Ad choices</a>
                </div>
                <div className='flex gap-4 text-gray-500'>
                    <a href = "#" className='text-sm'>Advertising</a>
                    <a href = "#" className='text-sm'>Business Services</a>
                </div>
                <div className='flex gap-4 text-gray-500'>
                    <a href = "#" className='text-sm'>Get the LinkedIn app</a>
                    <a href = "#" className='text-sm'>More</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default LeftSide
