"use client"
import { MockInterview } from "@/app/utils/schema";

import {db} from'@/app/utils/db'
import { eq } from 'drizzle-orm';

import React,{useEffect, useState} from "react";
import QuestionSection from "./_components/QuestionSection";
import VideoSection from "./_components/VideoSection";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



const Start = ({params}) => {
    const[interviewdata,setInterviewdata] = useState();
    const[mockInterviewQuestions,setMockInterviewQuestions]= useState([]);
    const[activeQuestion,setActiveQuestion]= useState(0);
    const router = useRouter();
    
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
      <QuestionSection mockInterviewQuestions={mockInterviewQuestions} interviewdata={interviewdata} activeQuestion={activeQuestion} />
      <div className ="flex justify-end mr-32 gap-3">
         <Button disabled={activeQuestion <= 0} className ="bg-purple-600 shadow-lg  font-medium" onClick={()=>setActiveQuestion(activeQuestion-1)}>Previous Question</Button>
        {activeQuestion != mockInterviewQuestions?.length-1 && <Button className ="bg-purple-600  shadow-lg  font-medium"onClick={()=>setActiveQuestion(activeQuestion+1)}>Next Question</Button>}
        {activeQuestion == mockInterviewQuestions?.length-1 && <Button onClick={()=>router.push(`/dashboard/interview/${interviewdata?.mockId}/feedback`)} className="shadow-lg ">End Interview</Button>}

      </div>
  
  </div>
  
  )
}

export default Start