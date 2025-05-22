import React from 'react'

const SquareGrid = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex gap-1'>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
      </div>
      <div className='flex gap-1'>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
      </div>
      <div className='flex gap-1'>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
        <div className='w-[4px] h-[4px] bg-zinc-900'></div>
      </div>
    </div>
  )
}

export default SquareGrid
