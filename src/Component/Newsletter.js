import React from 'react'
// import emaillogo from "../Images/email logo.svg"
export const Newsletter = () => {
  return (
    <section className="w-[89.4375rem] h-[29.8125rem] flex flex-col justify-center items-center ml-10 mr-[2.5625rem] "> 
            <h1 className=' font-medium -tracking-[0.0625rem] text-[#1f1f1f] border-black h-[6.25rem] text-[3.125rem] mb-[1.5rem]'>Get 25% off on your first order</h1>
            <p className="w-[48.1875rem] h-20 flex justify-center text-[#8a8a8a] text-[1.75rem] text-center -tracking-[0.035rem] mb-6 mx-[20.625rem]">Want exclusive offers and first access to Produt? Sign up for Newsletter</p>
            <form className="flex justify-center items-center w-[64.9375rem] h-20 rounded-[1.0625rem] mx-[12.25rem] mb-[3.125rem] text-[#8a8a8a] ">
                <label for ="email"></label>
                {/* <img className="border-2 border-yellow-400" src={emaillogo} alt="emaillogo"/> */}
                <input className="border-[0.1062rem] border-[#8a8a8a] text-[1.75rem] font-normal leading-[2.45rem] w-[47.5rem]  text-center h-20 bg-[#f4f4f4] rounded-[1.0625rem]"type="email" name="email" placeholder="Enter Your email"/>
                <input className="  w-[13.6875rem] h-20 ml-[3.75rem] bg-[#C50460] rounded-[1.0607rem] text-center shadow-[0_6.788571357727051px_13.577142715454102px_0_rgba(0, 0, 0, 0.10] text-[#f4f4f4] text-[2.3125rem] font-medium -tracking-[0.0462rem]" type="submit" value="Subscribe"/>
            </form>
            <p className=' text-center text-[1.69713rem] -tracking-[0.03394rem] h-[6.375rem] w-[59.125rem] text-[#8a8a8a] ml-[15.19rem] mr-[15.12rem] mb-[0.88rem] leading-[2.375rem] '>By entering the email,you agree to our<a className="text-center text-[#484FA2] " href="#">Terms of condition</a>and <a className="text-[#484FA2] text-center"href="#">Privacy Notice</a>, including receipt of emails and Promotions.You can unsubscribe at anytime</p>

    </section>
  )
}
