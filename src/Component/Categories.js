import React from 'react'
import CategoryImg1 from "../Images/CategoryImg1.png"
import CategoryImg2 from "../Images/CategoryImg2.png"
import CategoryImg3 from "../Images/CategoryImg3.png"
import CategoryImg4 from "../Images/CategoryImg4.png"
import CategoryImg5 from "../Images/CategoryImg5.png"

function Categories() {
  return (
    <section className="w-[89.25rem] h-[19.5625rem] ml-[0.94rem] mr-[4.31rem] mb-10 gap-6 flex flex-col ">
            <h1 className= "text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tighter">Categories</h1>
            <div className="gap-6 flex ">
                    <div className="w-[89.5rem] h-[16.3245rem] gap-3 flex flex-col justify-center items-center">   
                            <div classame="w-[13.625rem] h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] w-full h-full" src={CategoryImg1} alt="categoryimg"/></div>
                            <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] '>Seasonal wear</p>
                    </div>
                    <div className="w-[89.5rem] h-[16.3245rem] gap-3 flex flex-col justify-center items-center">   
                            <div classame="w-[13.625rem] h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] w-full h-full" src={CategoryImg2} alt="categoryimg"/></div>
                            <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] '>Seasonal wear</p>
                    </div>
                    <div className="w-[89.5rem] h-[16.3245rem] gap-3 flex flex-col justify-center items-center">   
                            <div classame="w-[13.625rem] h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] w-full h-full" src={CategoryImg3} alt="categoryimg"/></div>
                            <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] '>Seasonal wear</p>
                    </div>
                    <div className="w-[89.5rem] h-[16.3245rem] gap-3 flex flex-col justify-center items-center">   
                            <div classame="w-[13.625rem] h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] w-full h-full" src={CategoryImg4} alt="categoryimg"/></div>
                            <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] '>Seasonal wear</p>
                    </div>
                    <div className="w-[89.5rem] h-[16.3245rem] gap-3 flex flex-col justify-center items-center">   
                            <div classame="w-[13.625rem] h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] w-full h-full" src={CategoryImg4} alt="categoryimg"/></div>
                            <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] '>Seasonal wear</p>
                    </div>
                    <div className="w-[89.5rem] h-[16.3245rem] gap-3 flex flex-col justify-center items-center">   
                            <div classame="w-[13.625rem] h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] w-full h-full" src={CategoryImg5} alt="categoryimg"/></div>
                            <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] '>Seasonal wear</p>
                    </div>

            </div>
            

    </section>
  )
}

export default Categories