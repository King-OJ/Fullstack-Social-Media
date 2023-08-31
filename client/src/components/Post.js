import React from 'react'
import FriendCard from './FriendCard'
import { MdPersonRemove, MdShare, MdComment, MdThumbUp, MdSend } from 'react-icons/md'

export default function Post({ author, likes, comments, authorLocation, authorProfilePic, postDetail, postImage }) {

  return (
    <li className={`bg-grey10 dark:bg-grey800 rounded-lg shadow-md hover:shadow-lg transition duration-200`}>
        <FriendCard image={authorProfilePic} icon={<MdPersonRemove size={18} />} title={authorLocation} name={author} />
        <div className="space-y-3 px-4 pb-6">
            <p className='text-sm lg:text-base'>{postDetail}</p>
            <div className="rounded-lg ">
                <img src={postImage} alt="posts" className='object-cover max-h-96 w-full' />
            </div>
        </div>
        <div className="px-4 pb-6">
            <div className="flex justify-between items-center">
               <div className="grid items-center grid-flow-col gap-4 text-xs md:text-sm">
                    <div className='grid items-center grid-flow-col gap-1'>
                        <button>
                            <MdThumbUp size={18} />
                        </button>
                        <span className='text-xs'>{likes}</span>
                    </div>
                    <div className='grid items-center grid-flow-col gap-1'>
                        <button>
                            <MdComment size={18} />
                        </button>
                        <span className='text-xs'>{comments}</span>
                    </div>
                </div>
                
                <div className="hidden md:flex rounded-full flex-1 bg-grey100 bg-opacity-60 dark:bg-grey700 ml-4 self-stretch overflow-hidden items-center">
                    <input type="text" placeholder='Leave a comment...' className="dark:caret-primary500 flex-1 outline-none px-3 h-full bg-transparent placeholder:text-xs placeholder:md:text-sm" />
                    <button className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                        <MdSend size={18}/>
                    </button>
                </div>
                
                <button className='ml-2 p-1 rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                    <MdShare size={18} />
                </button>
            </div>
            <div className="mt-4 md:hidden rounded-full w-full bg-grey100 bg-opacity-60 dark:bg-grey700 overflow-hidden flex items-center">
                <input type="text" placeholder='Leave a comment...' className="dark:caret-primary500 flex-1 outline-none px-3 h-full bg-transparent placeholder:text-xs placeholder:text-grey800 placeholder:dark:text-grey0 placeholder:md:text-sm text-xs" />
                <button className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                    <MdSend size={18}/>
                </button>
            </div>
        </div>
    </li>
  )
}
