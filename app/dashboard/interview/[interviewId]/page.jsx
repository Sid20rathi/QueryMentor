"use client"
import { MockInterview } from "@/app/utils/schema";
import { Button } from "@/components/ui/button";
import {db} from'@/app/utils/db'
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from "lucide-react";
import React,{useEffect, useState} from "react";
import Webcam from "react-webcam";
import { Container } from "postcss";
import { useRouter } from "next/navigation";



function Interview({params}) {
  const router = useRouter();
  const[webCamEnable,setwebCamEnable] = useState(false);
  const[interviewdata,setInterviewdata] = useState();
  useEffect(()=>{
      getInterviewdetails();
     


  },[]);
  const getInterviewdetails = async()=>{
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId))
    
    
    setInterviewdata(result[0]);

    


  }
 
  return (
    <div>
       <h2 className ="text-3xl text-pretty font-black text-center pt-10 underline">Let's start the interview</h2>
        <div className="flex flex-col relative justify-between  sm:flex-row items-center md:flex-row">
      <div className="  flex flex-col  gap-5 ">
        <h2 className="text-2xl "><strong>Job Position:</strong> {interviewdata?.jobPosition}</h2>
        <h2 className="text-2xl "><strong>Job Description/Tech Stack:</strong> {interviewdata?.jobDescription}</h2>
        <h2 className="text-2xl "><strong>Years of Experience:</strong> {interviewdata?.jobExperience}</h2>   
        <div className="pt-11 ">
          <h2 className="flex flex-row underline text-lg"><Lightbulb/><strong>Information</strong></h2>
          <h6 className="text-sm text-red-600 ">Enable Web cam and Microphone to start your Ai Mock Interview,<br></br>It hs questions related to the job position and tech stack mentioned above.<br></br>At the last you will get the report on the basis of your answer.</h6>
        </div>
       
       

       
        
      

      </div>
      <div className="flex flex-col">
 
  <div className="mt-10 pl-12 h-[500px] flex justify-center flex-col items-center ">
    <div className="h-[500px] w-[500px] flex items-center justify-center  ">
      {webCamEnable ? (
        <Webcam 
          height={500} 
          width={500} 
          mirrored={true} 
          className="rounded-lg" 
        />
      ) : (
        <WebcamIcon className="h-64 w-64 m-4" />
      )}
    </div>
  </div>

  
  <div className=" pl-9 flex justify-center">
    <Button  className=" bg-slate-300 hover:bg-slate-600 text-black shadow-xl" onClick={() => setwebCamEnable(!webCamEnable)}>
      Camera On/Off
    </Button>
  </div>
</div>

     
   

    </div>
    <div className="m-10">
    <Button className="w-full flex justify-center bg-blue-500 text-white py-2 px-4 rounded-lg text-lg shadow-2xl " onClick={()=> router.push( `/dashboard/interview/${params.interviewId}/start`)}>Start Interview</Button>
    </div>

    </div>
  
  
  )
}

export default Interview