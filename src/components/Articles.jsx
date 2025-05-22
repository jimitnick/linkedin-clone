import React from 'react'
import { PlusIcon, HandThumbUpIcon, ChatBubbleBottomCenterTextIcon, ShareIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
const Articles = () => {
  const cameraIcon ="https://raw.githubusercontent.com/CleverProgrammers/cp-linkedin-clone/f014d361d787029f15ea0f0f78c053d8c214f138/public/images/photo.svg";
  return (
    <div className='w-full min-h-[600px] bg-zinc-300 rounded-xl shadow-lg relative'>
        <div className='w-full h-[70px] bg-white rounded-t-xl flex items-center justify-between p-4'>
            <div className='h-full flex items-center justify-center relative'>
                <img src={cameraIcon} alt="" className='rounded-full h-[50px] w-[50px] border-1 p-1'/>
                <div className='flex flex-col h-full gap-0 absolute top-[-10px] left-[60px]'>
                    <h1 className='text-md font-bold'>Name</h1>
                    <p className='text-[13px]'>Info</p>
                    <p className='text-[13px]'>Date</p>
                </div>
            </div>
            <div className='flex items-center cursor-pointer hover:bg-blue-100 px-2 py-1 rounded-md'>
                <PlusIcon className='h-5 w-5 text-blue-600 font-bold cursor-pointer'/>
                <button className='cursor-pointer'><span className='text-lg text-blue-500'>Follow</span></button>
            </div>
        </div>
        <div className='w-full min-h-[50px] bg-white flex items-center justify-self-start p-4'>
            <span className='text-sm'>Enter the description to the post</span>
        </div> 
        <div className='absolute bottom-0 rounded-b-xl bg-white w-full h-[80px] flex flex-col justify-between p-4 items-center'>
            <div className='w-full h-[20px] flex justify-between items-center border-b-1 border-gray-300 p-1'>
                <div className='flex h-full items-center justify-center'>
                    <span className='text-sm'>Reactions</span>
                </div>
                <div className='items-center justify-center'>
                    <span className='text-sm text-gray-500'>14 comments</span>
                </div>
            </div>
            <div className='flex w-full justify-between h-[55px]'>
                <div className='flex gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-md'>
                    <HandThumbUpIcon className='h-5 w-5'/>
                    <span className='text-sm'>Like</span>
                </div>
                <div className='flex gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-md'>
                    <ChatBubbleBottomCenterTextIcon className='h-5 w-5'/>
                    <span className='text-sm'>Comment</span>
                </div>
                <div className='flex gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-md'>
                    <ArrowPathRoundedSquareIcon className='h-5 w-5'/>
                    <span className='text-sm'>Repost</span>
                </div>
                <div className='flex gap-4 cursor-pointer hover:bg-gray-100 p-3 rounded-md'>
                    <ShareIcon className='h-5 w-5'/>
                    <span className='text-sm'>Share</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles
