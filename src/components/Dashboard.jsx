import React from 'react'
import Navbar from './Navbar'
import NavbarAfterLogin from './NavbarAfterLogin'
import ProfileCard from './ProfileCard'
import UserContents from './UserContents'
import LeftSide from './LeftSide'

const Dashboard = () => {
  return (
    <div className='mainDashboard bg-gray-100 min-h-screen w-screen flex flex-col items-center'>
      <NavbarAfterLogin theme = {""}/>
      <main className="pt-16 h-[calc(100vh-64px)] absolute top-12 flex  items-center justify-center overflow-hidden">
        <div className="flex gap-4 overflow-y-auto h-full">
          <ProfileCard />
          <UserContents />
          <LeftSide />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
