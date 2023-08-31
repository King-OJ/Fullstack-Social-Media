import React, { useEffect } from 'react'
import { FloatingLabel } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleIsMember } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {

const highManbtn = document.getElementById("highman")
const dispatch = useDispatch()
const navigate = useNavigate()

const {user, isLoading, isMember} = useSelector(store => store.user)

useEffect(() => {
  if(user){
    navigate("/home")
  }
})


  return (
    <div id='highman' className='page relative top-20 md:top-24 '>
      <div className="flex items-center justify-center">
        <form action="" className='w-11/12 max-w-2xl space-y-6 bg-grey10 dark:bg-grey800 py-6 px-4 rounded-xl shadow-lg'>
          <div className='font-semibold text-sm md:text-base'>{`${isMember ? "Login to": "Create"} your Sociopedia Account. The social media for SocioPaths!`}</div>
          {!isMember &&
            <FloatingLabel label="name" type="text" name="name"/>}
          <FloatingLabel label="email" type="email" name="email"/>
          <FloatingLabel label="password" type="password" name="password"/>
          <button disabled={isLoading} type='submit' className="btn text-grey0 p-2 w-full rounded-lg uppercase font-semibold">{isMember ? "login": "register"}</button>
          <button disabled={isLoading} type='submit' className="btn text-grey0 p-2 w-full rounded-lg uppercase font-semibold">explore the app</button>
          <div className='text-xs sm:text-sm'>{isMember ? "Don't have an account yet?" : "Already have an account?"} <button type='button' onClick={()=>dispatch(toggleIsMember())} className='border-b-[1px]'>{isMember ? "Register" : "Login"}</button></div>
        </form>
      </div>
    </div>
  )
}
