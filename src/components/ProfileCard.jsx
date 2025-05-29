import React from 'react'
const ProfileCard = (props) => {
  return (
    <div className='profileCard rounded-2xl flex flex-col h-[300px] w-[260px] bg-white p-5 items-center relative shadow-lg'>
        <div className='Banner w-full h-[70px] bg-blue-100 rounded-t-2xl z-0'></div>
        <div className='ProfileImage absolute left-6 top-10 z-1'>
            <img src={props.userDets.photoURL} alt="" className='rounded-full w-[80px] h-[80px] border-2 border-white object-cover z-1'/>
        </div>
        <div className='Info absolute top-32 left-7'>
            <h1 className='text-2xl'>{props.userDets.displayName || "Guest"}</h1>
            <p className='text-[12px] text-zinc-500'>Profession</p>
            <p className='text-[11px] text-zinc-400'>Location</p><br />
            <p className='text-[13px] text-ainc-900 font-bold'>Institution / Office</p>
        </div>
    </div>
  )
}

export default ProfileCard
