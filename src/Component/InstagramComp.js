import React from 'react'
import Instagramblue from "../Images/Instagramblue.svg"
import instacoverimg from "../Images/instacoverimg.png"
import Instagramimg2 from "../Images/Instagramimg2.png"
import Instagramimg1 from "../Images/Instagramimg1.png"
import Instagramimg3 from "../Images/Instagramimg3.png"


function InstagramComp() {
  return (
    <section className='flex  sm:mb-3 sm1:flex-col  md:ml-[0.5rem] sm:gap-4  justify-center 4xl:justify-around  w-screen sm:p-1 md:p-2  lg:p-6 items-center  max-h-[25rem]  py-[3.875rem] pr-[6.0625rem] pl-[7.625rem]  gap-[6.9375rem] md:gap-2 lg:gap-3 2xl:ml-[0.94rem] 2xl:gap-10 4xl:gap-0 rounded-[0.625rem] mb-[2.69rem] ml-[0.94rem]   xl:p-8 2xl:p-8 4xl:p-7 4xl:m-2 2xl:m-2 sm:ml-1 mr-[4.13rem]  bg-[#f4f4f4] '>
           <div className='flex justify-center items-center    max-h-[8.9197rem]  rounded-[0.625rem] sm:w-[50%] sm1:w-full sm:ml-[0.01rem] md:max-h-[12rem] lg:max-h-64 xl:max-h-96  m1:max-h-[15rem] 2xl:max-h-[28rem] 4xl:max-h-[28rem] ' >
                    <div className='relative ] max-h-[10.9197rem] sm:max-h-48 md:max-h-56 lg:max-h-64 xl:max-h-96 2xl:max-h-[28rem] 4xl:max-h-[28rem]'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute top-[1.4rem] w-[82.5%] right-[0.65em] sm:top-[0.8rem] sm:right-[0.35rem] " src={Instagramimg2} alt="Instagramimg1"/>
                    </div>
                    <div className='relative  max-h-[10.9197rem] sm:max-h-48 md:max-h-56 lg:max-h-64 xl:max-h-96 2xl:max-h-[28rem] 4xl:max-h-[28rem]'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute top-[1.4rem] w-[82.5%] right-[0.65em] sm:top-[0.8rem] sm:right-[0.35rem] 4xl:max-h-[28rem]" src={Instagramimg1} alt="Instagramimg2"/>
                    </div>
                    <div className='relative  max-h-[10.9197rem] sm:max-h-48 md:max-h-56 lg:max-h-64 xl:max-h-96 2xl:max-h-[28rem] 4xl:max-h-[28rem]'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute top-[1.4rem] w-[82.5%] right-[0.65em] sm:top-[0.8rem] sm:right-[0.35rem]" src={Instagramimg3} alt="Instagramimg3"/>
                    </div>

            </div>

            <div className="flex flex-col justify-center items-center rounded-[0.625rem] max-w-[31.25rem] sm1:w-full max-h-[10.75rem] lg:max-h-64 xl:max-h-80 bg-[#f4f4f4] ">
                <img className="  w-auto h-auto md:h-[18%] md:w-[18%] sm:h-[15%] sm:w-[15%] sm1:h-[12%] sm1:w-[12%]  sm:text-[]" src={Instagramblue} alt="instagram"/>
                <p className='text-[1.417rem] sm:text-[1.2rem] font-medium leading-[1.98rem] tracking-tight'>@befrsher</p>
                <h1 className="flex justify-center items-center max-w-[31.25rem] sm:p-0 text-[2.5rem] sm:text-[1.5rem] font-medium tracking-tighter leading-9 sm:leading-6 text-[#1F1F1F] text-center p-2 ">Join us on instagram</h1>
            </div>

    </section>
  )
}

export default InstagramComp


{/* <section className='flex justify-center items-center w-[89.4375rem] h-[25rem] py-[3.875rem] pr-[6.0625rem] pl-[7.625rem]  gap-[6.9375rem] rounded-[0.625rem] mb-[2.69rem] ml-[0.94rem] mr-[4.13rem] bg-[#f4f4f4]'>
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

export default InstagramComp */}