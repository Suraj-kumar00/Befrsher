import React from 'react'
import searchicon from "../Images/searchicon.svg"
import Locationicon from "../Images/Location icon.svg"
import HeroSecImg from "../Images/HeroSecImg.png"
import storeicon from "../Images/Store.png"
import star from "../Images/star.svg"

function HeroSection() {
  return (
    <section className="w-[89.5rem] h-[26.5rem] flex flex-col  items-center justify-center">
        <img  className="relative w-full h-full" src={HeroSecImg} alt="HEroSecImg"/>
        <div className='absolute flex flex-col items-center '>
             <div className="text-[#E7e7e7]  text-[3.125rem] flex flex-col items-center justify-center font-bold  h-[12.5rem] w-[74.3125rem] tracking-[0.3125rem] ">
                      <p className=''>Keep Up with Local Fashion </p>
                      <p className='flex items-center'>Trends. EXPL<span className="w-10 h-10 inline"><img className="w-10 h-10 "src={star} alt="star icon"/> </span>RE</p>
              </div>
            
             <div className=" relative w-[44rem] h-10 rounded-[0.625rem] bg-[#e7e7e7] flex items-center ">
                
                            <div className="flex w-[8rem] h-5 justify-center ml-[0.5rem]">
                                <img className=" h-4 flex j" src={Locationicon} alt="locationicon"/>
                                <div className="flex items-center font-normal text-[1rem]  -tracking-[0.02rem] text-[#8a8a8a] ml-1 w-[7.25rem] h-5"type="text" placeholder='Add Location'>Add Location </div>

                            </div>
                             <div className="w-[0.0625rem] h-10 bg-[#8a8a8a] flex ml-[5.64rem]" ></div>
                                 
                                    <div className=" flex items-center  ml-[1.5rem]">
                                        <img src={searchicon} alt="searchicon"/>
                                            <label className=" ml-1">
                                                    <input type="submit" className="text-[1rem] font-normal -tracking-[0.02rem] text-[#8a8a8a]" placeholder='Search here' value="Search Here"></input>            
                                         </label> 

                                    </div>
                                    <img src={storeicon} alt="storeicon" className="w-[1.875rem] h-[1.875rem] absolute left-[41.13rem] right-[0.31rem]"/>


                                        

             </div>

        </div>
            

    </section>
  )
}

export default HeroSection