import React from 'react'
import { useState } from 'react';
import { FilmIcon, PhotoIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import CreatePost from '../utils/CreatePost';

const StartPost = () => {
  const cameraIcon ="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/photo.svg";
  const [display, setDisplay] = useState(false);
  const [change, setChange] = useState(false);
  return (
    <>
      <div className='w-full flex flex-col p-4 bg-white rounded-xl shadow-lg '>
          <div className='flex gap-4 items-center'>
              <img src={cameraIcon} alt="" className='h-12 w-12 rounded-full border-1 p-2'/>
              <input type="text" name="post" id="post" readOnly placeholder='Start a post' className='p-3 w-[calc(100%-2rem)] rounded-4xl border-1 cursor-pointer outline-none text-zinc-500 hover:bg-gray-100 hover:text-zinc-800' 
              onClick={()=>{
                  setDisplay(true);
              }}/>
          </div><br />
          <div className='flex justify-between items-center w-full'>
              <div className="flex gap-3 items-center rounded-md p-4 cursor-pointer hover:bg-gray-100 transition-colors ease-in-out">
                <FilmIcon className='h-7 w-7 text-green-700'/>
                <span className='text-[15px]'>Video</span>
              </div>
              <div className="flex gap-3 items-center rounded-md p-4 cursor-pointer hover:bg-gray-100 transition-colors ease-in-out">
                <PhotoIcon className='h-7 w-7 text-blue-500'/>
                <span className='text-[15px]'>Photo</span>
              </div>
              <div className="flex gap-3 items-center rounded-md p-4 cursor-pointer hover:bg-gray-100 transition-colors ease-in-out">
                <DocumentTextIcon className='h-7 w-7 text-red-700'/>
                <span className='text-[15px]'>Write article</span>
              </div>
          </div>
          <CreatePost Display = {display} setDisplay = {setDisplay} change = {change} setChange = {setChange}/>
      </div>
    </>
  )
}

export default StartPost
