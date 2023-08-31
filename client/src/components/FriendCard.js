import React from 'react'
import ProfilePic from './ProfilePic'
import { Link } from 'react-router-dom'

export default function FriendCard({ image, icon, title, name }) {
  return (
    <div className='p-4 flex justify-between items-center group'>
        <div className="grid grid-flow-col items-center gap-2">
          <Link to="/profile">
            <ProfilePic image={image}/>
          </Link>
          <div className="space-y-1 capitalize">
              <Link to="/profile" className='text-sm font-semibold group-hover:cursor-pointer group-hover:dark:text-primary100 group-hover:text-primary700 transition duration-200'>{name}</Link>
              <div className='text-xs sm:text-sm text-grey500 dark:text-grey200 tracking-wide'>{title}</div>
          </div>
        </div>
        <button className='p-[6px] rounded-full bg-primary700 bg-opacity-70 hover:bg-opacity-100 transition duration-200 text-primary100'>
            {icon}
        </button>
    </div>
  )
}
