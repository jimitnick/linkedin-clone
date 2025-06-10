import React from 'react'
import StartPost from './StartPost'
import Articles from './Articles'

const UserContents = (props) => {
  return (
    <div className='userContent w-[600px] overflow-y-auto h-full flex flex-col gap-4'>
      <StartPost  userDets = {props.userDets} photo = {props.userDets?.photoURL}/>
      <div className='w-full h-[30px] flex items-center gap-4'>
        <div className='w-[75%] bg-gray-700 h-[1px]'></div>
        <div className='flex gap-3'>
          <span className='text-sm text-gray-500'>Sort by: </span>
          <select name="options" id="options" className='text-sm outline-none'>
            <option value="Top">Top</option>
            <option value="Recent">Recent</option>
          </select>
        </div>
      </div>
      <Articles />
      <Articles />
    </div>
  )
}

export default UserContents
