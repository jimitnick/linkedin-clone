
import { ChevronDownIcon, XMarkIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FilmIcon, PhotoIcon, CalendarIcon, PlusIcon } from '@heroicons/react/24/solid';
import Tooltips from './Tooltips';
import { useState } from 'react';
// import EmojiInput from './EmojiInput';

const CreatePost = ({userDets, Display, setDisplay, change, setChange}) => {
  const [text, setText] = useState("");
  return (
    <div className={`createPost fixed inset-0 z-40 ${Display ? 'flex' : 'hidden'} justify-center bg-black/50 bg-opacity-50 `}>
        <div className="flex absolute top-[4.5%] flex-col w-[750px] h-[600px] bg-white rounded-lg p-6">
            <div className='profile flex justify-between items-center w-full p-4'>
                <div className='flex gap-4 cursor-pointer hover:bg-gray-200 p-4 rounded-xl'>
                    <img src={userDets?.photoURL} alt="" className='h-16 w-16 rounded-full border-1 p-1'/>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 items-center '>
                            <h1>{userDets?.displayName}</h1>
                            <ChevronDownIcon className='h-5 w-5 stroke-zinc-950'/>
                        </div>
                        <p>Post to anyone</p>
                    </div>
                </div>
                <XMarkIcon className='h-9 w-9 absolute right-2 top-3 cursor-pointer rounded-full p-1 hover:bg-gray-100' onClick={()=>{
                    setDisplay(false);
                }}/>
            </div>
            <div className='w-full'>
                <textarea name="postText" id="postText"  placeholder='What do you want to talk about?'  className='input w-full h-75 px-4 py-4 rounded resize-none overflow-y-auto outline-none text-2xl' onChange={(e)=>{
                    setText(e.target.value);
                    setChange(true);
                }}></textarea>
                {/* <EmojiInput /> */}

            </div>
            <div className='w-full flex gap-4 px-4 pb-8'>
                <Tooltips  title = {"Add a video"} Icon={<FilmIcon className='h-7 w-7 text-gray-600 cursor-pointer'/>}/>
                <Tooltips  title = {"Add a photo"} Icon={<PhotoIcon className='h-7 w-7 text-gray-600 cursor-pointer'/>}/>
                <Tooltips  title = {"Create an event"} Icon={<CalendarIcon className='h-7 w-7 text-gray-600 cursor-pointer'/>}/>
                <Tooltips  title = {"More"} Icon={<PlusIcon className='h-7 w-7 text-gray-600 cursor-pointer'/>}/>
            </div>
            <div className='w-full h-[1px] bg-gray-300'></div>
            <div className='flex justify-end items-center w-full h-2 pt-8 gap-4'>
                <Tooltips  title = {"Schedule for later"} Icon={<ClockIcon className='h-7 w-7 text-gray-600 cursor-pointer'/>}/>
                <button className={`${change &&  text ? 'bg-blue-600 text-white'  :  'bg-gray-400 text-white'} p-1 rounded-3xl w-[70px] cursor-pointer`}>Post</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
