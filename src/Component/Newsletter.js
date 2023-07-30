import React from 'react'
// import emaillogo from "../Images/email logo.svg"
export const Newsletter = () => {
  return (
    <section className="max-h-[29.8125rem] max-w-full  flex flex-col justify-center items-center ml-10 2xl:ml-[0.94rem] md:ml-[0.5rem] mr-[2.5625rem]  w-screen mt-1 4xl:m-2 sm:mb-3 "> 
            <h1 className=' font-medium -tracking-[0.0625rem] text-[#1f1f1f]  mt-1 p-2 flex items-center  h-[6.25rem] text-[3.125rem] md:text-[2.5rem] lg:text-[3rem] sm:text-[1.8rem] text-center leading-7  mb-[1.5rem] '> INSPIRATION IN YOUR INBOX
</h1>
            <p className="w-[48.1875rem] md:max-w-[40rem] sm:max-w-[25rem] sm2:max-w-[18rem] max-h-20 flex justify-center text-[#8a8a8a] text-[1.75rem] md:text-[1.5rem] sm:text-[1.3rem] text-center -tracking-[0.035rem] mb-6 mx-[20.625rem]">Sign up to be the first to hear About sales & new product releases!. </p>
            <form className="flex justify-center items-center max-w-[64.9375rem] max-h-20 rounded-[1.0625rem] mx-[12.25rem] mb-[3.125rem] text-[#8a8a8a] xl:max-w-3xl lg:max-w-2xl md:max-w-lg  sm:flex-col ">
                <label for ="email"></label>
                {/* <img className="border-2 border-yellow-400" src={emaillogo} alt="emaillogo"/> */}
                <input className="border-[0.1062rem] border-[#8a8a8a] text-[1.75rem] font-normal leading-[2.45rem] max-w-[47.5rem]  text-center h-20 bg-[#f4f4f4] rounded-[1.0625rem] sm2:max-w-[18rem] sm:max-w-[24rem]"type="email" name="email" placeholder="Enter Your email"/>
                <input className="  xl:max-w-[15rem] w-[13.6875rem] h-20 ml-[3.75rem] sm:mt-4 lg:ml-[2rem] md:ml-[1rem] xl:ml-[2.5rem] bg-[#C50460] rounded-[1.0607rem] text-center shadow-[0_6.788571357727051px_13.577142715454102px_0_rgba(0, 0, 0, 0.10] text-[#f4f4f4] text-[2.3125rem] xl:text-[2rem] lg:text-[1.8rem] md:text-[1.5rem] md:p-3 font-medium -tracking-[0.0462rem] " type="submit" value="Subscribe"/>
            </form>
            <p className=' text-center text-[1.69713rem] sm:text-[1rem] sm2:text-[0.8rem] sm1:m-1  xl:text-[1.2rem] md:leading-6 -tracking-[0.03394rem] max-h-[6.375rem] max-w-[59.125rem ] xl:max-w-[59rem]  sm2:max-w-[18rem] sm1:max-w-[20rem] sm1:m-1 sm:max-w-[25rem] lg:max-w-[40rem] xl:w-[55rem] md:max-w-[35rem]  text-[#8a8a8a] ml-[15.19rem]  mr-[15.12rem] mb-[0.88rem] leading-[2.375rem] sm2:leading-4  '>By entering the email,you agree to our<a className="text-center text-[#484FA2] " href="#">Terms of condition</a>and <a className="text-[#484FA2] text-center"href="#">Privacy Notice</a>, including receipt of emails and Promotions.You can unsubscribe at anytime</p>

    </section>
  )
}

