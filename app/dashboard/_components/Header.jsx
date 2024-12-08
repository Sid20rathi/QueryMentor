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
        <div className='text-purple-700 font-bold text-3xl'>QueryMentor</div>
        <ul className='hidden md:flex gap-6'>
          <li className={`hover:text-purple-900 hover:font-bold transition-all cursor-pointer ${path == '/dashboard'? 'text-purple-800 font-bold':'text-black'}`} onClick={() => router.push('/dashboard')}>Dashboard</li>
          <li className={`hover:text-purple-900 hover:font-bold transition-all cursor-pointer ${path == '/dashboard/question'? 'text-purple-800 font-bold':'text-black'}`}>Questions</li>
          <li className ={`hover:text-purple-900 hover:font-bold transition-all cursor-pointer ${path == '/dashboard/how-it-works'? 'text-purple-800 font-bold':'text-black'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header