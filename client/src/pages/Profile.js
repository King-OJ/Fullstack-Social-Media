import React from 'react'
import { Detail, FriendsList, PostFeeds } from '../components'
import { MdPersonRemove } from 'react-icons/md'

export default function Profile() {
  return (
    <div className="page relative top-20 md:top-24">
      <div className="fixed right-0 left-0 dark:bg-grey900 bg-grey0 h-[42px] top-[79px] md:top-[96px] z-20"></div>

      <div className="w-full flex items-start">
        <section className="space-y-6 hidden md:block w-[30%] fixed">
          <Detail/>
          <FriendsList title="Your friends" icon={<MdPersonRemove size={19} />} />
        </section>
        
        <div className="w-full md:w-[65%] md:ml-[35%]">
          <PostFeeds />
        </div>
      </div>
    </div>
  )
}
