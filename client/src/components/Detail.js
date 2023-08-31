import React from 'react'
import profilePic from '../assets/p2.jpeg'
import twitterImg from '../assets/twitter.png'
import linkedInImg from '../assets/linkedin.png'
import { MdSettings, MdLocationOn, MdWork, MdEdit } from 'react-icons/md'
import ProfilePic from './ProfilePic'


export default function Detail() {
  return (
    <div className=' bg-grey10 dark:bg-grey800 px-4 rounded-lg shadow-md self-start'>
        <div className="divide-grey400 dark:divide-grey200 divide-y-[1px]  ">
            <div  className='py-6 flex justify-between items-center'>
                <div className="grid grid-flow-col items-center gap-2">
                    <ProfilePic image={profilePic}/>
                    <div className="space-y-1">
                        <h4 className='text-base lg:text-lg font-semibold'>Fake Man</h4>
                        <div className='text-sm text-grey500 dark:text-grey200 tracking-wide'>3 Friends</div>
                    </div>
                </div>
                <button className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                    <MdSettings size={21} />
                </button>
            </div>
            
            <div className="py-6 space-y-2">
                <div className='flex items-center space-x-4'>
                    <MdLocationOn size={21} />
                    <div className='text-sm text-grey500 dark:text-grey200 tracking-wide'>My City</div>
                </div>
                <div className='flex items-center space-x-4'>
                    <MdWork size={21} />
                    <div className='text-sm text-grey500 dark:text-grey200 tracking-wide'>My Job</div>
                </div>
            </div>

            <div className="py-6 space-y-2">
                <div className='flex items-center justify-between'>
                    <div className='text-sm xl:max-w-none max-w-[100px] text-grey500 dark:text-grey200 tracking-wide'>Who's viewed my profile</div>
                    <div className='text-sm font-semibold tracking-wide text-grey400 dark:text-grey100'>8647</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-sm xl:max-w-none max-w-[100px] text-grey500 dark:text-grey200 tracking-wide'>Impressions of my posts</div>
                    <div className='text-sm font-semibold tracking-wide text-grey400 dark:text-grey100'>947</div>
                </div>
            </div>

            <div className="py-6">
                <h5 className='mb-3 text-base text-grey400 dark:text-grey100 font-semibold'>Social links</h5>
                <div className="space-y-4">
                    <div className='flex items-center justify-between text-xs transition duration-200 hover:cursor-pointer'>
                        <div className='flex items-center space-x-4'>
                            <img src={twitterImg} alt='twitter' />
                            <div className='space-y-1'>
                                <h6 className='font-semibold text-xs text-grey400 dark:text-grey100'>Twitter</h6>
                                <div className='text-xs tracking-wide text-grey500 dark:text-grey200'>Social Network</div>
                            </div>
                        </div>
                        <button className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                            <MdEdit size={18}/>
                        </button>
                    </div>
                    <div className='flex items-center justify-between text-xs transition duration-200 hover:cursor-pointer'>
                        <div className='flex items-center space-x-4'>
                            <img src={linkedInImg} alt='twitter' />
                            <div className='space-y-1'>
                                <h6 className='font-semibold text-xs text-grey400 dark:text-grey100'>LinkedIn</h6>
                                <div className='text-xs tracking-wide text-grey500 dark:text-grey200'>Network Platform</div>
                            </div>
                        </div>
                        <button className='p-[6px] rounded-full hover:bg-grey100 hover:dark:bg-primary700 hover:dark:text-grey10 hover:bg-opacity-80 transition duration-200'>
                            <MdEdit size={18}/>
                        </button>
                    </div>
                    
                </div>
                
            </div>


        </div>
    </div>
  )
}
