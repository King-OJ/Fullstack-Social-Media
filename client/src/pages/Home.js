import React from 'react'
import { Detail, PostFeeds, SideDetail } from '../components'

export default function Home() {
  return (
    <div className="page relative top-20 md:top-24">
      <div className="fixed right-0 left-0 dark:bg-grey900 bg-grey0 h-[42px] top-[79px] md:top-[96px] z-20"></div>

      <div className="grid gap-4 grid-flow-col md:grid-cols-3 lg:grid-cols-4">
        <section className="hidden lg:block lg:fixed lg:w-[22%] lg:mr-[72%] top-[120px] md:top-[135px]">
          <Detail/>
        </section>
        
        <div className="hidden lg:block lg:w-[56%] lg:mx-auto">
        </div>
        <PostFeeds />

        <aside className='hidden md:block md:fixed md:w-[28%] lg:w-[22%] md:ml-[64%] lg:ml-[72%] top-[120px] md:top-[135px]'>
          <SideDetail />
        </aside>
      </div>
    </div>
  )
}
