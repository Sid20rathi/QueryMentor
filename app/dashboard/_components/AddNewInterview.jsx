"use client"
import React, { useEffect, useState } from 'react'
import {db} from'@/app/utils/db'
import {MockInterview} from'@/app/utils/schema'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'

function AddNewInterview() {
    const[openDialog, setOpenDialog] = useState(false)
    const[jobPosition, setJobPosition] = useState();
    const[jobDescription, setJobDescription] = useState();
    const[jobExperience, setJobExperience] = useState();
    const router = useRouter();
    const {user} = useUser()
     const onSubmit = async(e)=>{
      const res = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp:"null for now",
        jobPosition:jobPosition,
        jobDescription:jobDescription,
        jobExperience:jobExperience,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('YYYY-MM-DD'),



      }).returning({mockId:MockInterview.mockId})
      setOpenDialog(false)
     

    }
  return (
    
    <div>
        <div className ="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all" onClick={()=>setOpenDialog(true)}> 
            <h2 className='font-bold text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open= {openDialog}>
  
  <DialogContent className ="max-w-2xl">
    <DialogHeader>
        <DialogTitle className='text-2xl'>Tell us more about your job Interview</DialogTitle>
     
      <DialogDescription>
      < form >
        <div>
           
            <h2>Add Details about your job position/role, Job description and years of experience</h2>
            <div className='mt-7 my-3'>
            <label> Job Role/Job Position</label>
            <Input placeholder='Ex. Full Stack Developer' required onChange={(e)=>{
                setJobPosition(e.target.value)
            }} />

            </div>
            <div className=' my-3'>
            <label> Job Description</label>
            <Textarea placeholder='Ex. React,Angular ,Node js ,MySql etc' required onChange={(e)=>{
                setJobDescription(e.target.value)}}/>

            </div>
            <div className=' my-3'>
            <label>Years of Experience</label>
            <Input placeholder='Ex.5 years' type='number' min='0' max='20' required onChange={(e)=>{
                setJobExperience(e.target.value)}}/>

            </div>
           
            
        </div>
        </form>
       
        <div className='flex gap-5 justify-end'>
            <Button variant='ghost' type='button' onClick={()=>setOpenDialog(false)}> Cancel</Button>
            <Button type='submit' onClick ={() => router.push('/dashboard/interview/23')}> Start</Button>
        </div>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
   
  )
}

export default AddNewInterview