import React from 'react'
import { MdLightMode, MdDarkMode, MdHelpCenter, MdPerson } from 'react-icons/md'


export default function MobileNav({ isMobNavOpen, theme, toggleMode }) {
  return (
    <aside className={isMobNavOpen ? 'z-20 w-[50%] h-screen fixed top-20 right-0 left-0 bottom-0 md:hidden': 'z-0 h-screen fixed top-20 right-0 left-0 bottom-0 md:hidden'}>
        <div className={isMobNavOpen ? "h-full translate-x-0 transition-all duration-200 ease-linear bg-grey0  dark:bg-grey900":"h-full -translate-x-full transition-all duration-200 ease-linear"}>
            <div className="py-14 flex pl-4">
              <ul className="space-y-8">
                <li>
                    <button onClick={toggleMode} className='flex items-center space-x-4'>
                    {theme === "dark" && <><MdLightMode size={23}/><span className={isMobNavOpen ? "opacity-100 visible transition duration-200": "opacity-0 invisible transition duration-200"}>Light Mode</span></>}
                    {theme === "light" && <><MdDarkMode size={23}/><span className={isMobNavOpen ? "opacity-100 visible transition duration-200": "opacity-0 invisible transition duration-200"}>Dark Mode</span></>}
                    </button>
                </li>
                <li >
                  <button onClick={toggleMode} className='flex items-center space-x-4'>
                    <MdPerson size={21} /><span className={isMobNavOpen ? "opacity-100 visible transition duration-200": "opacity-0 invisible transition duration-200"}>My Profile</span>
                  </button>
                </li>
                <li >
                  <button onClick={toggleMode} className='flex items-center space-x-4'>
                    <MdHelpCenter size={21} /><span className={isMobNavOpen ? "opacity-100 visible transition duration-200": "opacity-0 invisible transition duration-200"}>Need help?</span>
                  </button>
                </li>
              </ul>
            </div>
        </div>
    </aside>
  )
}
