import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

function Dashboard() {
  return (
    <div className='p-10'>  
      <h2 className='font-bold text-4xl'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your Ai mockup Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-23 my-5'>
        <AddNewInterview/>
      </div>
     
    </div>
  )
}

export default Dashboard