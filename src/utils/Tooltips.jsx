import React from 'react'

const Tooltips = ({title, Icon}) => {
  return (
    <div className="relative flex items-center justify-center group">
        {/* Tooltip */}
        <div className="text-center absolute min-w-fit px-16 shadow-xl border-1 border-gray-100 -top-14 left-[-30px] bg-white text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {title}
        </div>
        {/* Icon */}
        {Icon}
    </div>
  )
}

export default Tooltips
