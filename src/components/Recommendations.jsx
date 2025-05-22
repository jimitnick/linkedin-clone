import React from 'react'
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import RecommendationsFeed from '../utils/RecommendationsFeed'
const Recommendations = () => {
  return (
    <div className='recommendations w-[300px] h-[400px] bg-white flex flex-col gap-4 p-4 overflow-auto rounded-xl shadow-lg'>
        <div className='flex justify-between items-center h-4'>
            <h1>Add to your feed</h1>
            <InformationCircleIcon className='h-6 w-6'/>
        </div>
        <RecommendationsFeed AccountName =  {"HackTheBox"}/>
        <RecommendationsFeed AccountName =  {"Google"}/>
        <RecommendationsFeed AccountName =  {"Microsoft"}/>
        <RecommendationsFeed AccountName =  {"CodeChef"}/>
        <RecommendationsFeed AccountName =  {"LeetCode"}/>
        <RecommendationsFeed AccountName =  {"LinkedIn"}/>
        <RecommendationsFeed AccountName =  {"HackerRank"}/>
        <RecommendationsFeed AccountName =  {"HacksPlanning"}/>
    </div>
  )
}

export default Recommendations
