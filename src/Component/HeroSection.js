import React from 'react'
import searchicon from "../Images/searchicon.svg"
import Locationicon from "../Images/Location icon.svg"
import HeroSecImg from "../Images/HeroSecImg.png"

function HeroSection() {
  return (
    <section className="w-[89.5rem] h-[26.5rem] flex flex-col border-2 border-yellow-400">
        <img  className="relative w-screen h-full" src={HeroSecImg} alt="HEroSecImg"/>
        <div className='absolute'>
             <p className="text-[#E7e7e7] absolute text-[3.125rem] font-bold -tracking-[0.3125rem] h-[12.5rem] w-[74.3125rem] top-[4.06rem] bottom-[9.94rem] right-[10.19rem] left-[10rem] border-2 border-green-400 text-center">Keep Up with Local Fashion<br></br>
 Trends. EXPL  RE</p>
            <div className="searchlocation w-[44rem] h-10 rounded-[0.625rem] bg-[#e7e7e7] absolute top-[16.63rem] bottom-[7.38rem] right-[25.25rem] left-[25.25rem]">
                <div className="searchlocation w-[44rem] h-10 rounded-[0.625rem] bg-[#e7e7e7] absolute top-[16.63rem] bottom-[7.38rem] right-[25.25rem] left-[25.25rem]">
                            <div className="">
                                <img className=" h-4" src={Locationicon} alt="locationicon"/>
                                <div className=""type="text" placeholder='Add Location'>Add Location </div>

                            </div>
                             <div className="s w-[0.0625rem] h-[2.5rem] bg-[#8a8a8a]"></div>
                                 
                                    <div className="searchfunc">
                                        <img src={searchicon} alt="searchicon"/>
                                            <label>
                                                    <input type="submit" className="searchbtn" placeholder='Search here' value="Search Here"></input>            
                                        </label> 

                                    </div>
                                        

             </div>

        </div>
            

    </section>
  )
}

export default HeroSection