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
import { chatSession } from '@/app/utils/GeminiAimodel'
import { LoaderCircle } from 'lucide-react'

function AddNewInterview() {
    const[openDialog, setOpenDialog] = useState(false)
    const[jobPosition, setJobPosition] = useState();
    const[jobDescription, setJobDescription] = useState();
    const[jobExperience, setJobExperience] = useState();
    const[loading,setLoading] = useState(false);
    const[jsonResponse,setJsonResponse] = useState([]);
    const router = useRouter();
    const {user} = useUser()
    const onSubmit = async(e)=>{
      setLoading(true);
      e.preventDefault()
      const InputPrompt =  `job position: ${jobPosition}, job description: ${jobDescription}, job experience: ${jobExperience},depends on the job position and experience level, provide ${process.env.NEXT_PUBLIC_MOCK_INTERVIEW_QUESTIONS_COUNT} most difficult interview questions along with answers like how would a professional person would answer this question in an real interview in JSON format,Give us questions and answers field on JSON`
      const result = await chatSession.sendMessage(InputPrompt);
      const MockResponse = result.response.text().replace('```json','').replace('```','').replace(/[\x00-\x1F\x7F]/g,'');
      console.log(JSON.parse(MockResponse));
      setJsonResponse(MockResponse);
      if(MockResponse){
        const res = await db.insert(MockInterview).values({
          mockId: uuidv4(),
          jsonMockResp:MockResponse,
          jobPosition:jobPosition,
          jobDescription:jobDescription,
          jobExperience:jobExperience,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY'),
  
  
  
        }).returning({mockId:MockInterview.mockId})
      
        if(res){
          setOpenDialog(false);
          router.replace(`/dashboard/interview/${res[0]?.mockId}`)
        }
       
      }else{
        console.log("No response yet")
      }

      setLoading(false);
    
     

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
      < form onSubmit={onSubmit} >
        <div>
           
            <h2>Add Details about your job position/role, Job description and years of experience</h2>
            <div className='mt-7 my-3'>
            <label className="text-black"> Job Role/Job Position</label>
            <Input placeholder='Ex. Full Stack Developer'className="text-black" required onChange={(e)=>{
                setJobPosition(e.target.value)
            }} />

            </div>
            <div className=' my-3'>
            <label className="text-black"> Job Description/Tech Stack</label>
            <Textarea placeholder='Ex. React,Angular ,Node js ,MySql etc' className="text-black" required onChange={(e)=>{
                setJobDescription(e.target.value)}}/>

            </div>
            <div className=' my-3'>
            <label className="text-black">Years of Experience</label>
            <Input placeholder='Ex.5 years' type='number' min='0' max='20' className="text-black" required onChange={(e)=>{
                setJobExperience(e.target.value)}}/>

            </div>
           
            
        </div>
    
       
        <div className='flex gap-5 justify-end'>
            <Button variant='ghost' type='button' onClick={()=>setOpenDialog(false)}> Cancel</Button>
            <Button type='submit'  disabled={loading} > {loading ? <><LoaderCircle className='animate-spin h-5 w-5 mr-3 flex justify-center'/>Generating Questions</> : 'Start Interview'}</Button>
        </div>
        </form>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
   
  )
}

export default AddNewInterview