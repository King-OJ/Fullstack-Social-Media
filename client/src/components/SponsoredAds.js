import React from 'react'
import infoPic from '../assets/info4.jpeg'

export default function SponsoredAds() {
  return (
    <article className='bg-grey10 dark:bg-grey800 p-4 rounded-lg shadow-md'>
        <div className="flex justify-between items-center">
            <h6 className='text-sm text-grey400 dark:text-grey100 font-semibold'>Sponsored</h6>
            <span className='text-xs font-semibold text-grey500 dark:text-grey200 tracking-wide'>Create Ad</span>
        </div>

        <div className="my-4 h-56 w-full rounded-lg overflow-hidden">
            <img src={infoPic} alt="product" className='h-full w-full object-cover object-center'/>
        </div>

        <div className="space-y-3 text-grey500 dark:text-grey200 text-sm">
            <div className="flex justify-between items-center">
                <div className='font-semibold'>Mike Cosmetics</div>
                <a href="mikecosmetics.com" className='text-xs xl:text-sm'>mikecosmetics.com</a> 
            </div>
            <p className='text-xs xl:text-sm'>
                Your pathway to stunning and immaculate beauty and make sure your skin is effoliating skin and shinning like light.
            </p>
        </div>

    </article>
  )
}
