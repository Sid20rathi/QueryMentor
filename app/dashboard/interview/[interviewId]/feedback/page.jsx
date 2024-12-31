"use client"
import { db } from '@/app/utils/db'
import { UserAnswers } from '@/app/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


function feedback({params}) {
  const router = useRouter();
    const[feedbackList,setFeedbackList] = useState([]);
    const[noOfAnswers,setNoOfAnswers] = useState(0);
    const[totalrating,setTotalRating] = useState(0);
    useEffect(()=>{
        getFeedback();
    },[])

    const getFeedback= async()=>{
        const result = await db.select().from(UserAnswers).where(eq(UserAnswers.mockIdRef,params.interviewId)).orderBy(UserAnswers.id);
    
        let ans = 0;
 
        setNoOfAnswers(result.length);
        for(let i = 0; i<result.length;i++){
          let num  = Number(result[i].rating);
          ans = ans+num;
        
        
           
        }
        setTotalRating(ans);
     
       
       
       setFeedbackList(result);

    }
    const value = (totalrating/noOfAnswers).toFixed(2);
  
  return (
    <div className="p-10">
        <h2 className={`text-5xl select-none font-extrabold underline ${value<5?"text-red-500":"text-green-500"}`}> {value<5?"Need Improvement !":"Congratulation !"}</h2>
        <h2 className="font-bold text-2xl mt-6">Here is your interview feedback</h2>
        <h2 className ="text-purple-700 text-3xl my-5">Your overall interview rating: <strong className= {`${value>5?"text-green-500":"text-red-500 "}`}> {value}</strong><span className="text-black">/10</span></h2>
        <h2 className="text-sm text-gray-500 pb-4">Find below interview question with correct answer, Your answer and feedback for improvement.</h2>
       
        {feedbackList && feedbackList.map((item,index)=>(
          	<Collapsible.Root key={index}>
            <Collapsible.Trigger className='p-2  rounded-lg bg-gray-200 my-5 text-left flex flex-row gap-7'>{item.question}<ChevronsUpDown></ChevronsUpDown></Collapsible.Trigger >
            <Collapsible.Content >
            <div className="flex flex-col gap-2">
            <h2 className='text-red-500 p-2  rounded-lg'>
              <strong>Rating:</strong> {item.rating}
              
              </h2>
              <h2 className= {`p-2 border rounded-lg text-sm ${item.rating<5?"bg-red-200 text-red-900":"bg-green-200 text-green-900"}`} ><strong>Your Answer:</strong> {item.userAns}</h2>
              <h2 className= {`p-2 border rounded-lg text-sm bg-green-200 text-green-900"`} ><strong>Optimal Answer:</strong> {item.correctAns}</h2>
              <h2 className= {`p-2 border rounded-lg text-sm bg-blue-200 text-blue-900"`} ><strong>FeedBack:</strong> {item.feedback}</h2>
            </div>
           
            
            </Collapsible.Content >
          </Collapsible.Root>
         

        ))}
        <div className='flex justify-center'>
        <Button  onClick={()=>router.replace("/dashboard")} className="bg-blue-600 mt-6">Go Home</Button>
        </div>
    </div>
  )
}

export default feedback