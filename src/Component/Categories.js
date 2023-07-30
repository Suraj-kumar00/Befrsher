import React from 'react'
// import CategoryImg1 from "../Images/CategoryImg1.png"
// import CategoryImg2 from "../Images/CategoryImg2.png"
// import CategoryImg3 from "../Images/CategoryImg3.png"
// import CategoryImg4 from "../Images/CategoryImg4.png"
// import CategoryImg5 from "../Images/CategoryImg5.png"
import { CategoriesData } from '../utils/CategoriesData'
        
function Categories() {
        console.log(CategoriesData)

  return (
//     <section className="w-[89.25rem] h-[19.5625rem] ml-[0.94rem] mr-[4.31rem] mb-10 gap-6 flex flex-col ">
    <section className=" max-h-[22.5625rem] ml-[0.94rem]  mr-[4.31rem] mb-10 md:mb-3 md:ml-[0.5rem] gap-6 2xl:gap-1 sm:gap-0 flex flex-col flex-shrink w-full max-w-screen mt-8   sm:mt-3   ">

            <h1 className= "text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tighter sm:ml-0 sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]">Categories</h1>

            <div className="flex  flex-grow mt-6 sm:overflow-scroll 4xl:mt-2 justify-evenly gap-6 md:gap-4 sm:gap-1 sm:ml-0 items-center flex-shrink  w-full  ">

                {
                        CategoriesData.map((data)=>
                                // <div className="flex-grow h-[16.3245rem] gap-3 flex flex-col justify-center items-center border-2 border-red-500 4xl:flex-grow  2xl:max-w-[11.11rem] xl:max-w-[9.15rem] lg:max-w-[6.5rem] md:max-w-[5.17rem] sm:overflow-x-auto">   
                                   <div className=" max-h-[16.3245rem] gap-3 flex flex-col justify-center items-center   flex-grow border-2 ">
                                <div classame="2xl:max-w-[13.625rem] max-h-[13.625rem] rounded-[0.625rem] w-full flex flex-grow  4xl:max-w-full  "><img className="rounded-[0.625rem] max-w-full min-h-full flex-grow object-fit" src={data.image} alt="categoryimg"/></div>
                                <p className='text-[1.3125rem] sm:text-[1rem] font-medium -tracking-[0.02625rem] text-center'>{data.name}</p>
                        </div>
                        )
                }


            </div>
    </section>
  )
}

export default Categories