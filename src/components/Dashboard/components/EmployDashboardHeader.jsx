import React from 'react'

const EmployDashboardHeader = () => {
  return (
    <div className='flex justify-between px-10 py-5 md:px-20 md:pt-10'>
        <h1 className='text-xl font-medium'>Hello <br /><span className='text-2xl font-bold'>Jeet 👋</span></h1>
        <button className='h-10 bg-red-500 text-white px-5 py-2 mt-2.5 rounded-sm text-sm font-medium'>Log Out</button>
    </div>
  )
}

export default EmployDashboardHeader