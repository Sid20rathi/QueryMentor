"use client"
import { db } from '@/app/utils/db'
import { UserAnswers } from '@/app/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Box,Collapsible } from "@chakra-ui/react"

function feedback({params}) {
    const[feedbackList,setFeedbackList] = useState([]);
    useEffect(()=>{
        getFeedback();
    },[])

    const getFeedback= async()=>{
        const result = await db.select().from(UserAnswers).where(eq(UserAnswers.mockIdRef,params.interviewId)).orderBy(UserAnswers.id);
       setFeedbackList(result);

    }
  return (
    <div className="p-10">
        <h2 className="text-5xl select-none font-extrabold underline text-green-500"> Congratulation !</h2>
        <h2 className="font-bold text-2xl mt-6">Here is your interview feedback</h2>
        <h2 className ="text-purple-700 text-3xl my-5">Your overall interview rating: <strong> 7/10</strong></h2>
        <h2 className="text-sm text-gray-500">Find below interview question with correct answer, Your answer and feedback for improvement.</h2>
        {feedbackList && feedbackList.map((item,index)=>(
          "new"

        ))}
    </div>
  )
}

export default feedback