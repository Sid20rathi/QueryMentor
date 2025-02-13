import { Index } from 'drizzle-orm/pg-core';
import { Lightbulb, Volume2, VolumeOffIcon } from 'lucide-react'
import React, { useState } from 'react'
import VideoSection from './VideoSection';

function QuestionSection({mockInterviewQuestions,interviewdata,activeQuestion}) {
    

    const textToSpeech = (text) => {
      if('speechSynthesis'in window) {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
      }else{
        alert('Your browser does not support text to speech feature');
      }
    }


  return mockInterviewQuestions&&(
    <div>
      <div className ="grid grid-cols-1 md:grid-cols-2">
        <div className='h-96 overflow-visible'>
        <div className='p-5 border rounded-lg my-5 shadow-xl shadow-black relative height-[500px]'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockInterviewQuestions&& mockInterviewQuestions?.map((questions,index)=>(
            <h2 className={`p-2  rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestion===index?'bg-purple-600 text-white':'bg-slate-200'} `} >Question #{index+1}</h2>
        ))}
        
        </div>
        <div className='h-[200px] items-center mt-10'>
        <h2 className='my-5 text-lg md:text-md'>{mockInterviewQuestions[activeQuestion]?.question}</h2>
        <Volume2 onClick={()=>textToSpeech(mockInterviewQuestions[activeQuestion]?.question )} className='cursor-pointer text-purple-600'/>
       
        

        </div>
        
       <div className='border rounded-lg p-5  bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-blue-700'>
            <Lightbulb/>
            <strong>Note:</strong>
        </h2>
        <h2 className='text-sm text-blue-700 my-2 '> Click on Record Answer when you want to answer the questions. At the end of interview we will give you the feedback along with correct answer for each of question and your answer to compare it.    </h2>
       </div>
       
    </div>

        </div>
        <VideoSection mockInterviewQuestions={mockInterviewQuestions} activeQuestion={activeQuestion} interviewdata={interviewdata} /> 

      </div>
      
      
    </div>
    
  )
}

export default QuestionSection