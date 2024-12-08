"use client"
import { Button } from "@/components/ui/button";
import { WebcamIcon } from "lucide-react";
import React,{useState} from "react";
import Webcam from "react-webcam";



function Interview() {
  const[webCamEnable,setwebCamEnable] = useState(false);
 
  return (
    <div className ="my-10 flex justify-center flex-col items-center">
      <h2 className ="font-bold text-3xl">Let's start the interview</h2>
      <div>
        {webCamEnable?<Webcam height={600} width={600} className="rounded-lg" />:<WebcamIcon className="h-96 w-96 m-4"/>}
        
      </div>

       
      <div className="m-4 flex justify-center ">
        <Button onClick ={()=>setwebCamEnable(!webCamEnable)}>Camera On/Off</Button>
       

      </div>
    </div>
  )
}

export default Interview