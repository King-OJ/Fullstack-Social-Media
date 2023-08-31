import React from 'react'
import ProfilePic from './ProfilePic'
import profileImage from '../assets/p2.jpeg'
import { MdImage, MdVideoFile, MdAttachment, MdAudioFile } from 'react-icons/md'


export default function CreatePost() {

    const postButtons = [
        {
            title: "image",
            icon: <MdImage size={21} />
        },
        {
            title: "video",
            icon: <MdVideoFile size={21} />
        },
        {
            title: "attachment",
            icon: <MdAttachment size={21} />
        },
        {
            title: "audio",
            icon: <MdAudioFile size={21} />
        },
    ]

  return (
    <div className='bg-grey10 dark:bg-grey800 px-4 rounded-lg shadow-md'>
        <div className="divide-grey400 dark:divide-grey200 divide-y-[1px] ">
            <div className="flex items-center py-4 ">
                <ProfilePic image={profileImage}/>
                <div className="rounded-full flex-1 bg-grey100 bg-opacity-60 dark:bg-grey700 ml-4 self-stretch overflow-hidden">
                    <input type="text" placeholder='whats on your mind...' className="dark:caret-primary500 outline-none pl-4 text-xs md:text-sm w-full h-full bg-transparent placeholder:text-xs placeholder:md:text-sm" />
                </div>
            </div>
            <div className="grid gap-4 items-center py-4 ">
                <ul className="w-full flex justify-between items-center">
                    {
                        postButtons.map((postbtn, index)=>{
                            return (
                                <li key={index}>
                                    <button className='capitalize grid grid-flow-col gap-1 items-center text-xs lg:text-sm text-grey500 dark:text-grey200 tracking-wide'>
                                        {postbtn.icon} <span>{postbtn.title}</span>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='justify-self-end'>
                    <button className="bg-primary700 hover:bg-opacity-80 text-sm md:text-base transition duration-200 text-grey0 rounded-full px-4  py-[2px] tracking-wide">Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}
