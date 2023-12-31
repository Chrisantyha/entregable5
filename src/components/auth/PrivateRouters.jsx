import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouters = () => {
    const {name} = useSelector((store)=> store.trainer)

    if(name){
        return <Outlet />
    }
  return <Navigate to="/" />
}

export default PrivateRouters