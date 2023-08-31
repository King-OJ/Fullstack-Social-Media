import React from 'react'
import { useSelector } from 'react-redux'

export default function Alert() {
    const { showAlert, alertText } = useSelector(store => store.user)
  return (
    <div className='fixed flex justify-center top-0 right-0 left-0 z-[100] '>
        <div className={showAlert ?
        'transition-all duration-200 text-center mt-24 opacity-100 w-full max-w-sm border-2 border-primary500 p-4 rounded-md bg-grey0 dark:bg-grey1000'
        :
        'transition-all duration-200 text-center -mt-40 opacity-0 w-full max-w-sm border-2 border-primary500 p-4 rounded-md bg-grey0 dark:bg-grey1000'}>{alertText}</div>
    </div>
  )
}
