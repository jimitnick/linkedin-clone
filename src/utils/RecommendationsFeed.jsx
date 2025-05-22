import React from 'react'
import FollowButton from './FollowButton'
import { HashtagIcon } from "@heroicons/react/24/outline"

const RecommendationsFeed = (props) => {
  return (
    <div className='flex items-center  gap-6'>
        <HashtagIcon className='h-13 w-13 rounded-full border-1 p-2 border-double'/>
        <div className='flex flex-col items-center'>
            <a href="#">#{props.AccountName}</a>
            <FollowButton />
        </div>
    </div>
  )
}

export default RecommendationsFeed
