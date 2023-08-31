import React from 'react'

export default function ProfilePic({image}) {
  return (
    <div className='h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden'>
        <img src={image} alt="profile" className='object-cover'/>
    </div>
  )
}
