import React from 'react'
import TodaysDealImg from "../Images/TodaysDealImg.png"

function TodaysDeal() {
  return (
    <section className='ml-[0.94rem] mr-[4.06rem] mb-10 w-[89.5rem] h-[34.1875rem] flex flex-col gap-6'>
            <h1 className="text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tight " >Todays Deal</h1>
            <div className='relative rounded-[1.25rem] h-[30.125rem] w-[89.5rem]'>
                <img className="w-full h-full" src={TodaysDealImg}alt="TodaysDealImage"/>
                <div className='absolute bottom-[1.56rem] right-[9.12rem] left-[56.62rem] top-[24.81rem] w-[23.75rem] h-[3.75rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] font-semibold tracking-tighter text-center'><a className='flex justify-center items-center' href="#">Explore</a></div>
            </div>

    </section>
  )
}

export default TodaysDeal