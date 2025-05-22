import React from 'react'
import LinkedLogo from '../images/linkedinLogo.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HomeIcon, UserGroupIcon,BriefcaseIcon,ChatBubbleLeftEllipsisIcon,BellIcon,ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import SquareGrid from '../utils/SquareGrid'
import { Navigate } from 'react-router-dom'

const NavbarAfterLogin = (props) => {
  return (
    <div className='w-full h-14 flex items-center justify-center gap-36 bg-white fixed'>
      <div className='flex justify-center items-center gap-3'>
        <img src={LinkedLogo} alt="" className='w-[40px] h-[40px] object-cover cursor-pointer'/>
        <div className='flex items-center rounded-md'>
            <MagnifyingGlassIcon className={`h-7 w-7 ${props.theme === "dark" ? "bg-slate-700 text-white" : "bg-gray-100 text-zinc-900"} h-[40px] px-1`}/>
            <input type="search" name="search" id="search" placeholder='Search' className={`${props.theme === "dark" ? "bg-slate-700 text-white" : "bg-gray-100 text-zinc-900"} xl:w-[250px] h-[40px] rounded-r-md outline-none px-4`}/>
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='menuOptions'>
            <HomeIcon className='svg'/>
            <span className='small'>Home</span>
        </div>
        <div className='menuOptions'>
            <UserGroupIcon className='svg'/>
            <span className='small'>My Network</span>
        </div>
        <div className='menuOptions'>
            <BriefcaseIcon className='svg'/>
            <span className='small'>Jobs</span>
        </div>
        <div className='menuOptions'>
            <ChatBubbleLeftEllipsisIcon className='svg'/>
            <span className='small'>Messaging</span>
        </div>
        <div className='menuOptions'>
            <BellIcon className='svg'/>
            <span className='small'>Notifications</span>
        </div>
        <div className='menuOptions group relative'>
            <img src={LinkedLogo} alt="Profile Photo" className='w-[30px] h-[30px] rounded-full'/>
            <div className='profile flex gap-1 items-center relative '>
                <span className='small'>Me</span>
                <ChevronDoubleDownIcon className='h-3 w-3 text-zinc-900'/>
            </div>
            <div className="signout hidden items-center justify-center w-[120px] h-[50px] bg-white absolute top-11 left-[-40px] shadow rounded-sm group-hover:flex">
                <span className='text-md'>Sign Out</span>
            </div>
        </div>
        <div className='flex  gap-4 items-center'>
            <div className='h-[100%] w-[1.3px] bg-zinc-900'></div>
            <div className='menuOptions h-[95%]'>
                <SquareGrid />
                <div className='flex gap-1 items-center'>
                    <span className='small'>For Business</span>
                    <ChevronDoubleDownIcon className='h-3 w-3 text-zinc-900'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarAfterLogin
