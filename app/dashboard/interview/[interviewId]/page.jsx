"use client"
import { MockInterview } from "@/app/utils/schema";
import { Button } from "@/components/ui/button";
import {db} from'@/app/utils/db'
import { eq } from 'drizzle-orm';
import { WebcamIcon } from "lucide-react";
import React,{useEffect, useState} from "react";
import Webcam from "react-webcam";
import { Container } from "postcss";



function Interview({params}) {
  const[webCamEnable,setwebCamEnable] = useState(false);
  const[interviewdata,setInterviewdata] = useState();
  useEffect(()=>{
      getInterviewdetails();
     


  },[]);
  const getInterviewdetails = async()=>{
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId))
    
    
    setInterviewdata(result[0]);
    console.log(result);
    console.log(result[0]);


  }
 
  return (
    <div>
       <h2 className ="font-bold text-3xl text-pretty font-black text-center pt-10">Let's start the interview</h2>
        <div className="flex flex-row justify-between">
      <div className=" border-red-950">{console.log(interviewdata)}
       
       

       
        
      

      </div>
      <div className ="my-10 flex justify-center flex-col items-center">
     
      <div>
        {webCamEnable?<Webcam height={600} width={600}  mirrored={true} className="rounded-lg" />:<WebcamIcon className="h-96 w-96 m-4"/>}
        
      </div>

       
      <div className="m-4 flex justify-center ">
        <Button onClick ={()=>setwebCamEnable(!webCamEnable)}>Camera On/Off</Button>
       

      </div>
    </div>

    </div>
    </div>
  
  
  )
}

export default Interview