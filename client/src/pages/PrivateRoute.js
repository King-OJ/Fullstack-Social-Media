import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {

const { user } = useSelector(store=>store.user) 

if(!user){
    return <Navigate to="/"/>
}

  return (
    <>{children}</>
  )
}
