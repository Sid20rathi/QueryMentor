import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function Itemcard({interview}) {
  const router = useRouter()

  return (
    <div className='border  round p-3 shadow-xl '>
        <h2 className='font-bold text-violet-600'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At:{interview?.createdAt}</h2>
        <div className='flex  justify-between  mt-5 gap-5'>
            <Button size="sm" variant="outline" className="w-full" onClick={()=>router.push("/dashboard/interview/"+interview?.mockId+"/feedback")}>FeedBack</Button>
            <Button size="sm" className="bg-violet-500 font-medium w-full" onClick={()=>router.push("/dashboard/interview/"+interview?.mockId)}>start</Button>
        </div>

    </div>
  )
}

export default Itemcard