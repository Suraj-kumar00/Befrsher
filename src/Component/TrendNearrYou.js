import React from 'react'
import TrendNearYou from "../Images/TrendNearYouImg.png"
function TrendNearrYou() {
  return (
    <section className='ml-[0.94rem] mr-[4.06rem] mb-10 max-w-[89.5rem] max-h-[34.1875rem] flex flex-col gap-6 flex-shrink flex-nowrap'>
            <h1 className="text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tight flex flex-nowrap " >Trends Near you</h1>
            <div className='relative rounded-[1.25rem] h-[30.125rem] max-w-[89.5rem] flex flex-shrink'>
                <img className="max-w-full max-h-full w-auto h-auto" src={TrendNearYou}alt="TrendNearYouImage"/>
                <div className='absolute max-w-[36.25rem] max-h-[3.75rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] font-semibold tracking-tighter left-[47.44rem] bottom-[3.19rem] top-[23.19rem] right-[5.81rem]'><a className='flex justify-center items-center' href="#">Explore</a></div>
            </div>

    </section>
  )
}

export default TrendNearrYou