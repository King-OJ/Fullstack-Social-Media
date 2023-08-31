import React from 'react'
import FriendCard from './FriendCard'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'

export default function FriendsList({ title, icon }) {
  const friendList = [
    {
      name: "watcha doing",
      job: "educator",
      image: p1
    },
    {
      name: "Jane doe",
      job: "hacker",
      image: p2
    },
    {
      name: "steve ralph",
      job: "educator",
      image: p3
    },
    {
      name: "laju Ojigs",
      job: "tech babe",
      image: p4
    },
  ]

  return (
    <div className='bg-grey10 dark:bg-grey800 py-4 rounded-lg shadow-md'>
      <h6 className='text-sm pl-4 text-grey400 dark:text-grey100 font-semibold'>{title}</h6>
      <ul className="mt-6 w-full">
        {
          friendList.map((friend, index)=> {
            return (
              <li key={index} className=" transition duration-200 hover:bg-grey50 hover:dark:bg-grey700 hover:cursor-pointer">
                <FriendCard key={index} image={friend.image} icon={icon} title={friend.job} name={friend.name} />
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}
