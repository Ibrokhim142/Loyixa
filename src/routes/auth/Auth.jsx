import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
     <div className=' p-[24px] max-w-[350px] w-full    shadow-cm'>
     <Outlet/> 
     </div>
    </div>
  )
}

export default Auth