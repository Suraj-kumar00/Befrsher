import React from 'react'
import Instagramblue from "../Images/Instagramblue.svg"
import instacoverimg from "../Images/instacoverimg.png"
import Instagramimg2 from "../Images/Instagramimg2.png"
import Instagramimg1 from "../Images/Instagramimg1.png"
import Instagramimg3 from "../Images/Instagramimg3.png"


function InstagramComp() {
  return (
    <section className='flex justify-center items-center w-[89.4375rem] h-[25rem] py-[3.875rem] pr-[6.0625rem] pl-[7.625rem]  gap-[6.9375rem] rounded-[0.625rem] mb-[2.69rem] ml-[0.94rem] mr-[4.13rem] bg-[#f4f4f4]'>
           <div className='flex w-[37.5625rem] h-[16.9197rem]  rounded-[0.625rem] ' >
                    <div className='relative w-[12.1843rem] h-[10.9197rem]'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute top-[1.4rem] w-[82.5%] right-[0.65em]" src={Instagramimg2} alt="Instagramimg1"/>
                    </div>
                    <div className='relative w-[12.1843rem] h-[10.9197rem]'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute top-[1.4rem] w-[82.5%] right-[0.65em]" src={Instagramimg1} alt="Instagramimg2"/>
                    </div>
                    <div className='relative w-[12.1843rem] h-[10.9197rem]'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute top-[1.4rem] w-[82.5%] right-[0.65em]" src={Instagramimg3} alt="Instagramimg3"/>
                    </div>

            </div>

            <div className="flex flex-col justify-center items-center rounded-[0.625rem] w-[31.25rem] h-[10.75rem] bg-[#f4f4f4] ">
                <img className="w-[4.72rem] height-[4.72rem]" src={Instagramblue} alt="instagram"/>
                <p>@befrsher</p>
                <h1 className=" w-[31.25rem] h-[3.875rem] text-[2.5rem] font-medium tracking-tighter text-[#1F1F1F] text-center">Join us on instagram</h1>
            </div>

    </section>
  )
}

export default InstagramComp