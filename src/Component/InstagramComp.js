import React from 'react'
import Instagramblue from "../Images/Instagramblue.svg"
import instacoverimg from "../Images/instacoverimg.png"
import Instagramimg2 from "../Images/Instagramimg2.png"
import Instagramimg1 from "../Images/Instagramimg1.png"
import Instagramimg3 from "../Images/Instagramimg3.png"


function InstagramComp() {
  return (
    <section className='flex w-[] h-[]py-[3.875rem] px-[7.625rem] gap-[6.9375rem] rounded-[0.625rem] mb-10 '>
           <div className='flex w-[37.5625rem] gap-[0.91963rem] h-[17.25rem] gap-[0.55rem]'>
                    <div className='relative'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute left-[1.07rem] right-[0.93rem] top-[2.17rem] bottom-[4.72rem]" src={Instagramimg2} alt="Instagramimg1"/>
                    </div>
                    <div className='relative'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute left-[1.07rem] right-[0.93rem] top-[2.17rem] bottom-[4.72rem]" src={Instagramimg1} alt="Instagramimg2"/>
                    </div>
                    <div className='relative'>
                          <img className="" src={instacoverimg} alt="instacoverimg"/>
                          <img className="absolute left-[1.07rem] right-[0.93rem] top-[2.17rem] bottom-[4.72rem]" src={Instagramimg3} alt="Instagramimg3"/>
                    </div>

            </div>

            <div className="flex flex-col justify-center items-center border-2 border-black w-[31.25rem] h-[10.75rem] bg-[#f4f4f4] ">
                <img className="w-[4.72rem] height-[4.72rem]" src={Instagramblue} alt="instagram"/>
                <p>@befrsher</p>
                <h1 className=" w-[31.25rem] h-[3.875rem] text-[2.5rem] font-medium tracking-tighter text-[#1F1F1F] text-center">Join us on instagram</h1>
            </div>

    </section>
  )
}

export default InstagramComp