import React, { useState } from 'react'
import { MdLightMode, MdDarkMode, MdSearch, MdMenu, MdChat, MdNotifications, MdHelpCenter, MdArrowDropDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { clearAlert, logoutUser } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function NavBar( {toggleMobileNav, theme, toggleMode } ) {
  
  const { user } = useSelector((store)=> store.user)
  const dispatch = useDispatch()

  const [showLogout,setShowLogout] = useState(false)


  const navLinks = [
    {
      name: "chats",
      icon: <MdChat size={19} />
    },
    {
      name: "notifications",
      icon: <MdNotifications size={19} />
    },
    {
      name: "help",
      icon: <MdHelpCenter size={19} />
    },
  ]

  
  return (
    <nav className='h-20 md:h-24
     bg-grey10 dark:bg-grey800 shadow-lg fixed top-0 left-0 right-0 z-30'>
        <div className="page h-full flex items-center justify-between">
          
          <div className='grid grid-flow-col items-center gap-2'>
            <button className='md:hidden' onClick={()=>toggleMobileNav()}>
              <MdMenu size={23}/>
            </button>

            <h3 className="text-primary500 font-extrabold "><Link to="/home">Sociopedia</Link></h3>
            <div className="hidden md:grid bg-grey100 bg-opacity-30 dark:bg-grey700 rounded-full overflow-hidden grid-flow-col items-center gap-2">
              <input type="text" className='
              dark:caret-primary500
              h-full
              outline-none
              block
              bg-inherit 
              px-2.5 
              py-2.5
              ' 
              />
              <button className='pr-2'>
                <MdSearch size={23}/>
              </button>
            </div>
          </div>

          <ul className='grid grid-flow-col items-center gap-4 md:gap-8'>
            <li className='hidden md:block'>
              <button onClick={toggleMode}>
                {theme === "dark" && <MdLightMode size={23}/>}
                {theme === "light" && <MdDarkMode size={23}/>}
              </button>
            </li>
            {
              user &&
              navLinks.map((link, index)=> {
                return (
                  <li key={index} className={link.name === "help" ? "hidden md:block": ""}>
                    <button>
                      {link.icon}
                    </button>
                  </li>
                )
              })
            }
            <li className={user ? 'block relative':'hidden'}>
              <button onClick={()=>
                setShowLogout(!showLogout)} 
                className='flex text-grey0 px-[6px] py-[2px] sm:py-1 transition duration-200 bg-primary700 hover:bg-primary600 rounded-md font-semibold text-xs sm:text-sm tracking-wider'>Clement <MdArrowDropDown size={21} className='ml-[2px]'/></button>
              <div className={showLogout ? 
                  "transition-all duration-200 z-50 flex flex-col divide-y-[1px] absolute top-8 right-0 left-0 bg-grey700 dark:bg-grey0 text-grey0 dark:text-grey1000 shadow-lg rounded-md sm:px-2 sm:py-1 px-[6px] py-[2px]"
                :
                "transition-all duration-200 z-0 hidden"
                }>  

                <Link to="/profile" className='py-1 font-semibold text-sm tracking-wider'>My Profile</Link>
                <button onClick={()=>{
                  dispatch(logoutUser())
                  setTimeout(() => {
                    dispatch(clearAlert()) 
                  }, 2000);
                }} className='py-1 font-semibold text-sm tracking-wider'>Logout</button>
              </div>
            </li>
          </ul>
          

          

        </div>
    </nav>
  )
}
