import React from 'react'
import HeaderLogo from "../images/linkedinDashboardHeaderImage.png"
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { FilmIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { PuzzlePieceIcon } from '@heroicons/react/24/solid'
const Navbar = (props) => {
  return (
    <div className='w-full h-[70px] flex justify-center items-center xl:gap-112 fixed md:gap-36'>
      <div className=''>
        <img src={HeaderLogo} alt="" className='h-[120px] w-[120px] object-cover'/>
      </div>
      <div className='flex gap-7'>
        <div className='flex gap-10'>
          <div className='menuOptions'>
              <NewspaperIcon className='svg'/>
              <span className='small'>Articles</span>
          </div>
          <div className='menuOptions'>
              <UserGroupIcon className='svg'/>
              <span className='small'>People</span>
          </div>
          <div className='menuOptions'>
              <FilmIcon className='svg'/>
              <span className='small'>Learning</span>
          </div>
          <div className='menuOptions'>
              <BriefcaseIcon className='svg'/>
              <span className='small'>Jobs</span>
          </div>
          <div className='menuOptions'>
              <PuzzlePieceIcon className='svg' />
              <span className='small'>Games</span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-8'>
          <div className='w-[1.3px] rounded-2xl h-9 bg-zinc-400'></div>
          <button>{"Join Now"}</button>
          <button className='bg-white text-blue-700 rounded-3xl px-8 h-[50px] w-[100px] border-1 border-blue-700 cursor-pointer hover:bg-blue-50'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
