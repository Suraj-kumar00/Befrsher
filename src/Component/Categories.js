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
    <section className=" h-[19.5625rem] ml-[0.94rem] mr-[4.31rem] mb-10 gap-6 flex flex-col w-full  ">

            <h1 className= "text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tighter">Categories</h1>

            <div className="gap-6 flex flex-nowrap items-center  w-full flex-shrink ">

                {
                        CategoriesData.map((data)=>
                                // <div className="flex-grow h-[16.3245rem] gap-3 flex flex-col justify-center items-center border-2 border-red-500 4xl:flex-grow  2xl:max-w-[11.11rem] xl:max-w-[9.15rem] lg:max-w-[6.5rem] md:max-w-[5.17rem] sm:overflow-x-auto">   
                                   <div className=" max-h-[16.3245rem] gap-3 flex flex-col justify-center items-center border-2 border-red-500   ">
                                <div classame="max-w-[13.625rem] min-h-[13.625rem] rounded-[0.625rem]"><img className="rounded-[0.625rem] max-w-full min-h-full object-fill" src={data.image} alt="categoryimg"/></div>
                                <p className='text-[1.3125rem] font-medium -tracking-[0.02625rem] text-center'>{data.name}</p>
                        </div>
                        )
                }


            </div>
    </section>
  )
}

export default Categories