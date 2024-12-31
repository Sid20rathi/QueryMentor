"use client"
import React, { useEffect } from 'react'
import  Image  from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'

function Header() {
  const router = useRouter();

  const path = usePathname()
  useEffect(()=>{
    console.log(path)
  })
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <div className='bg-gradient-to-r from-violet-600 to-green-500 text-transparent bg-clip-text font-bold text-3xl'>QueryMentor.</div>
      
        <UserButton/>
    </div>
  )
}

export default Header