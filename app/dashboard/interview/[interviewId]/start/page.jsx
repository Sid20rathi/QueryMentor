"use client"
import { MockInterview } from "@/app/utils/schema";

import {db} from'@/app/utils/db'
import { eq } from 'drizzle-orm';

import React,{useEffect, useState} from "react";
import QuestionSection from "./_components/QuestionSection";
import VideoSection from "./_components/VideoSection";



const Start = ({params}) => {
    const[interviewdata,setInterviewdata] = useState();
    const[mockInterviewQuestions,setMockInterviewQuestions]= useState([]);
    
    useEffect(()=>{
        getInterviewdetails();
       
  
  
    },[]);
    const getInterviewdetails = async()=>{
      const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId))
      const jsonMockResponse = JSON.parse(result[0].jsonMockResp);
      setMockInterviewQuestions(jsonMockResponse?.interview_questions_and_answers)
      setInterviewdata(result[0]);
  
      
  
  
    }

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            
            
            <QuestionSection mockInterviewQuestions={mockInterviewQuestions}  />

            <VideoSection/>

        </div>
    </div>
  )
}

export default Start