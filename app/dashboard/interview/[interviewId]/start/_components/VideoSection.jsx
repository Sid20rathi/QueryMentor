
"use client"
import useSpeechToText from 'react-hook-speech-to-text'; 
import { toast } from 'react-hot-toast'; 
import moment from 'moment/moment'

import { Button } from '@/components/ui/button'
import { Mic, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { chatSession } from '@/app/utils/GeminiAimodel';
import { db } from '@/app/utils/db';
import { useUser } from '@clerk/nextjs';
import { UserAnswers } from '@/app/utils/schema';

function VideoSection({mockInterviewQuestions,activeQuestion,interviewdata}) {
  const [userAnswer, setUserAnswer] = useState('')
  const{user} = useUser();
  const[loading,setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  useEffect(()=>{
    results.map((result)=>(
      setUserAnswer(prevAnswer => prevAnswer+result?.transcript)

    ))
    },[results])

    useEffect(()=>{
      if(!isRecording&&userAnswer?.length>5){
        updateUserAnswerInDb();
      }
      else if(userAnswer?.length<5 && userAnswer.length>0){
        setLoading(false)
        toast.error("Please record your answer")
        return;
      }

    },[userAnswer])

  
    const [webCamEnable, setWebCamEnable] = useState(true)


    const SaveUserAnswer= async()=>{
      if(isRecording){
       
        stopSpeechToText()
       
        
      }else{
        startSpeechToText()
      }
    };
    const updateUserAnswerInDb= async()=>{
      
      const mockId = interviewdata?.mockId ;
      console.log(typeof(mockId))
    

     
      setLoading(true);
      const feedbackPrompt=`Question:${mockInterviewQuestions[activeQuestion]?.question},User Answer:${userAnswer},depends on question and user answer for given interview question,please give us rating and feedback as area of improvement if any,in just 3 to 5 lines to improve it in JSON format with rating field and feedback field.`;
        const result = await chatSession.sendMessage(feedbackPrompt);
        const MockResponse = result.response.text().replace('```json','').replace('```','').replace(/[\x00-\x1F\x7F]/g, '');
        const JsonFeedbackResp = JSON.parse(MockResponse);
    

       const resp = await db.insert(UserAnswers).values({
        mockIdRef: interviewdata?.mockId,
        question: mockInterviewQuestions[activeQuestion]?.question,
        correctAnswer: mockInterviewQuestions[activeQuestion]?.answer,
        userAnswer: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        CreatedBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')

       })

       if(resp){
        toast.success(" Your Answer recorded successfully")
        setUserAnswer('');
        setResults([]);
       }
       setUserAnswer('');
      
       setLoading(false)

    }

  
  return (
    <div className='flex flex-col items-center justify-center '>
          <div className="mt-10 pl-12 h-[500px] flex justify-center flex-col items-center ">
          <div className="h-[500px] w-[500px] flex items-center justify-center   ">
            {webCamEnable ? (
              <Webcam 
                height={500} 
                width={500} 
                mirrored={true} 
                className="rounded-lg shadow-2xl shadow-black" 
              />
            ) : (
              <WebcamIcon className="h-64 w-64 m-4" />
            )}
          </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
        <Button  disabled={loading} variant="outline" className="ml-16 mb-10 border-purple-600 shadow-lg shadow-black hover:bg-slate-300" onClick={SaveUserAnswer}>
          {isRecording? <h2 className='text-red-600 flex gap-2'><Mic/>Stop Recording</h2>
             : 'Record Answer'}</Button>

       
     
        </div>
     
      
        
  </div>
  
  )
}



export default VideoSection