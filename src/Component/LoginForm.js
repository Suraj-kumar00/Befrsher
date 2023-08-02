import React from 'react'
import { useState } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import clsx from 'clsx';
import CustomInput from './CustomInput';
import LoginFormGirlImg from '../Images/LoginFormGirlImg.svg'


const LoginForm = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [activeButtonLogin, setActiveButtonLogin] = useState(0);
    const SignupHandler = () =>{
        setActiveButtonIndex(1) ;
         setActiveButtonLogin(0);
    }

    const LoginHandler = () => {
        setActiveButtonLogin(1) ;
        setActiveButtonIndex(0);
    }
  return (
    <div className="grid grid-cols-2 gap-[5.63rem] justify-items-center border-2 border-red-500 mt-[2.19rem]">

      <div  className=" max-w-[31.25rem] max-h-[50.625rem] ">

            <Formik>
            <Form  className="max-w-[31.25rem] max-h-[50.625rem]">
        <div className='flex gap-x-[1.88rem]'>       

        <div onClick={SignupHandler}
        className={clsx(
            {  "text-white bg-[#484FA2]" : activeButtonIndex===1,
             "text-black" : activeButtonIndex===0
            } ,
            ' flex justify-center items-center w-[12.5rem] h-[3.125rem] rounded-[0.3125rem]  text-[#fff] text-[1.3125rem] border-[#484FA2] border-[1px] font-semibold leading-1.31 tracking-light ]'
            )}>Sign Up</div>
        <div onClick={LoginHandler}
        className={clsx(
            {  "text-white bg-[#484FA2]" : activeButtonLogin===1,
             "text-black" : activeButtonLogin===0
            } ,
            'flex justify-center items-center w-[12.5rem] h-[3.125rem] rounded-[0.3125rem] border-[1px] border-[#484FA2]  text-[1.3125rem] font-semibold leading-1.31 tracking-lighttext-black')}>Login</div>

        </div>
       
        <div className='flex flex-col mt-[3.62rem]'>
            <CustomInput
            label=""
            name="phone"
            type="text"
            placeholder="Phone*"
          />
         
            </div>

            <div className='flex flex-col mt-[3.62rem] '>
                    <Field className="border-[1px]    py-[1.06rem] pl-[1.56rem]    max-w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] " type="number" name="otp" id="otp" placeholder="One Time Password (OTP) *"></Field>
                    <ErrorMessage name='otp'/>
            </div>

            <p className='flex  mt-[1.31rem] justify-center items-center max-w-[28.125rem]'>OR</p>

            <div className='flex flex-col mt-[1.31rem]'>
                    <Field className="border-[1px]    py-[1.06rem] pl-[1.56rem]    max-w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] " type="password" name="password" id="password" placeholder="Password*"></Field>
                    <ErrorMessage name='password'/>
            </div>

            <div className='mt-[0.75rem] text-base font-normal tracking-tight leading-4'>
            Don't have an account? <span className='text-[#484FA2] text-base font-normal tracking-tight'>Signup</span> 
            </div>

            <div className="max-w-[8rem] text-[#484FA2] text-[1rem] mt-[0.88rem] font-normal leading-4 tracking-tight">Forget password</div>

            <button type='submit' className='p-4 mt-[3.75rem] max-w-[28.125rem] w-full h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Login</button>


                    </Form>


            </Formik>

    </div>

        <div className="shadow-my_shadow rounded-[2rem] border-2 border-orange-400 max-w-[39.75rem max-h[50.2075]]" >
                 <img className="h-[100%] rounded-[2rem]"src={LoginFormGirlImg} alt="girlimg"/>
        </div>

</div>
  )

}

export default LoginForm