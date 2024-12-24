import { WebcamIcon } from 'lucide-react'
import React, { useState } from 'react'
import Webcam from 'react-webcam'

function VideoSection() {
    const [webCamEnable, setWebCamEnable] = useState(false)
  return (
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
  
  )
}

export default VideoSection