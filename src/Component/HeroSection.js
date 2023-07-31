import React from 'react'
import searchicon from "../Images/searchicon.svg"
import Locationicon from "../Images/Location icon.svg"
import HeroSecImg from "../Images/HeroSecImg.png"
import storeicon from "../Images/Store.png"
import star from "../Images/star.svg"

function HeroSection() {
  return (
    <section className="h-[26.5rem] flex flex-col flex-grow flex-shrink items-center justify-center max-w-screen w-full  sm:mb-3">
        <img  className="relative w-full h-full flex-grow flex-shrink flex max-w-screen object-cover " src={HeroSecImg} alt="HEroSecImg"/>
        <div className='absolute flex flex-col items-center flex-wrap'>
             <div className="text-[#E7e7e7]  text-[3.125rem] flex-wrap  xl:text-[2.5rem] md:text-[1.8rem]  sm:h-[14.5rem] sm:flex-wrap  flex flex-col items-center justify-center font-bold  h-[12.5rem]  tracking-[0.3125rem] sm:w-[18rem] sm2:text-[1.5rem] sm2:w-[15rem]">
                      <p className='sm:flex-wrap sm:flex sm:break-all leading-8 '>Keep Up with Local Fashion </p> 
                      <p className='flex items-center  sm:w-[18rem] sm2:w-[15rem] sm:flex-wrap sm:items-end mt-6 leading-8 '>Trends.EXPL<span className="w-10 h-10 inline   "><img className="w-10 h-10 "src={star} alt="star icon"/> </span>RE</p>
              </div>
            
             <div className=" relative w-[44rem] h-10 rounded-[0.625rem] bg-[#e7e7e7] flex items-center xl:w-[40rem] md:w-[32rem] sm:w-[19rem] sm1:w-[19rem] sm2:w-[15rem] ">
                
                            <div className="flex w-[8rem] h-5 justify-center items-center ml-[0.5rem] md:w-[6rem] md:ml-0  sm1:w-[3.5rem] relative sm:ml-[0.1rem] sm:w-[19rem] ">
                                <img className=" h-4 flex justify-center items-center absolute left-1  " src={Locationicon} alt="locationicon "/>
                                <input className="flex bg-[#e7e7e7] items-center justify-center font-normal text-[1rem] absolute sm:ml-[1.5rem]  -tracking-[0.02rem] text-[#8a8a8a] ml-1 w-[7.25rem] sm:h-full h-5 left-6 md:w-[9.5rem] lg:w-[11.2rem] xl:w-[11rem] 2xl:w-[11rem] 4xl:w-[11rem] md:h-full sm:left-2 sm:w-[16rem] sm2:w-[12rem]" type="text" placeholder='Add Location'></input>

                            </div>
                           
                             <div className="w-[0.0625rem] h-10 bg-[#8a8a8a] flex ml-[5.64rem] sm:hidden" ></div>
                                 
                            <div className=" flex items-center  ml-[1.5rem] relative sm:ml-[0.5rem] sm:hidden">
                                <img src={searchicon} alt="searchicon" className=''/>
                                    <label className="absolute inset-0 ml-1 sm:ml-7  ">
                                            <input type="text" className="absolute sm:w-[9rem] left-7 md:w-[14rem] text-[1rem] font-normal -tracking-[0.02rem] text-[#8a8a8a] lg:w-[19rem] xl:w-[20rem] 4xl:w-[23rem] bg-[#e7e7e7]" placeholder='Search here' ></input>            
                                  </label> 

                            </div>
                            
                             <img src={storeicon} alt="storeicon" className="w-[1.875rem] h-[1.875rem] absolute left-[41.13rem] right-[0.31rem]  xl:left-[38rem] md:left-[29.5rem] sm:left-[20rem] sm:hidden"/>


                                        

             </div>
             <div className=" relative w-[44rem] h-10 rounded-[0.625rem] bg-[#e7e7e7] flex items-center xl:w-[40rem] md:w-[32rem] sm:w-[19rem] sm1:w-[19rem]  sm:mt-2 sm:flex 4xl:hidden sm2:w-[15rem]">
                                <img src={searchicon} alt="searchicon" className='sm:ml-1'/>
                                    <label className="absolute inset-0 ml-1 sm:ml-7 flex items-center ">
                                            <input type="text" className="absolute sm:w-[14rem]  sm2:w-[10rem] left-6 md:w-[14rem] text-[1rem] font-normal -tracking-[0.02rem] text-[#8a8a8a] lg:w-[19rem] xl:w-[20rem] 4xl:w-[30rem] bg-[#e7e7e7]" placeholder='Search here' ></input>            
                                  </label> 
                                  <img src={storeicon} alt="storeicon" className="w-[1.875rem] h-[1.875rem] absolute left-[41.13rem] right-[0.31rem]  xl:left-[38rem] md:left-[29.5rem] sm:left-[16.5rem] sm2:left-[12.5rem] "/>

            </div>
        </div>
            

    </section>
  )
}

export default HeroSection