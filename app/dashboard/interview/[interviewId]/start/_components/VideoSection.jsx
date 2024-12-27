"use client"
import useSpeechToText from 'react-hook-speech-to-text';  

import { Button } from '@/components/ui/button'
import { Mic, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function VideoSection() {
  const [userAnswer, setUserAnswer] = useState('')
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  useEffect(()=>{
    results.map((result)=>(
      setUserAnswer(prevAnswer => prevAnswer+result?.transcript)

    ))

  },[results])
    const [webCamEnable, setWebCamEnable] = useState(true)
  return (
    <div className='flex flex-col items-center justify-center '>
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
        <Button variant="outline" className="ml-16 mb-10" onClick={isRecording?stopSpeechToText:startSpeechToText}>
          {isRecording? <h2 className='text-red-600 flex gap-2'><Mic/>Stop Recording</h2>
             : 'Record Answer'}</Button>

       <Button onClick={()=>console.log(userAnswer)}>Your answer</Button>
        
  </div>
  
  )
}

export default VideoSection