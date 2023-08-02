import React from 'react'
import { useState } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import clsx from 'clsx';


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
    <div className="grid grid-cols-2 gap-[6.56rem] ">

            <Formik>
            <Form  className="w-[31.25rem] h-[50.625rem]">
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
        <div className='flex flex-col'>
                    <label className="text-black font-medium leading-4" htmlFor = 'email'>Email</label>
                        <Field className="border-[1px] w-[28.125rem] h-[3.125rem] border-[#8a8a8a] rounded-[0.3125rem]  mt-[0.75rem]" type='email' name='email' id='email'/>
                    <ErrorMessage name='email'/>

            </div>
            <div className='flex flex-col'>
            
            <label className="text-black font-medium leading-4 " htmlFor='password'>Password</label>
                <Field className="border-[1px]  w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] mt-[0.75rem] " type="password" name="password" id="password"></Field>
                <ErrorMessage name='password'/>
            </div>

            <button type='submit' className=' mt-[3.75rem] w-[28.125rem] h-[3.13rem] rounded-[0.3125rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Login</button>

                    </Form>


            </Formik>

    </div>
  )
}

export default LoginForm