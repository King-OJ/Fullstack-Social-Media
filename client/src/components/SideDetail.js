import React from 'react'
import SponsoredAds from './SponsoredAds'
import FriendsList from './FriendsList'
import { MdPersonAdd, MdPersonRemove } from 'react-icons/md'

export default function SideDetail() {
  return (
    <div className="space-y-6">
       <SponsoredAds />
        <FriendsList title="People you may know" icon={<MdPersonAdd size={19}/>}/>
    </div>
  )
}
