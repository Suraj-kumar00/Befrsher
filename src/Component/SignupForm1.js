import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import formgirlimage from "../Images/formgirlimage.jpg"
import PhoneInput from "react-phone-input-2"



import clsx from 'clsx';
import { useState } from 'react';

import {Formik,Form,Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'
import YupPassword from 'yup-password';
YupPassword(Yup);


const initialValues={
    name:'',
    email:'',
    // phone:'',
    password:"",
    confirmpassword:"",
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),
//     phone:Yup
// .string()
//     // regexr.com/6anqd
//     .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
//       message: "Invalid Indian number",
//       excludeEmptyString: false,
//     })
//     .required().min(10,"10digits required"),
    email: Yup.string().email('Invalid email format ').required('Email Required'),
    password: Yup.string().required('PasswordRequired').min(
        8,
        'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
      )
      .minLowercase(1, 'password must contain at least 1 lower case letter')
      .minUppercase(1, 'password must contain at least 1 upper case letter')
      .minNumbers(1, 'password must contain at least 1 number')
      .minSymbols(1, 'password must contain at least 1 special character'),
      confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Required"),
  


})

    
function SignupForm() {
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
    const Phone = ({ field, form, ...props }) => {
        return (
          <PhoneInput
            country="in"
            placeholder="Enter phone number"
            value=""
            onChange={value => {
              if (!form.touched[field.name]) form.setFieldTouched(field.name);
              form.setFieldValue(field.name, value);
            }}
          />
        );
      };
     
   
  return (
    <div className="grid grid-cols-2 gap-[6.56rem] ">


      <div  className="formikdiv ml-[6.56rem] mt-[2.19rem] mb-[3.75rem]">
      <Formik
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
        <Form  className="max-w-[31.25rem] max-h-[50.625rem] ">
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
       

            <div className='flex flex-col mt-[1.88rem]'>
                    <label className="text-black font-medium leading-4" htmlFor='name'>Name</label>
                        <Field className="border-[1px] border-[#8a8a8a] w-[28.125rem]  h-[3.125rem]   rounded-[0.3125rem] mt-[0.75rem]" type="text" id="name" name="name" placeholder="Full Name *" />
                    <ErrorMessage name='name'/>
            </div>
   

            <div className='flex flex-col'>
                    <label className="text-black font-medium leading-4" htmlFor = 'email'>Email</label>
                        <Field className="border-[1px] w-[28.125rem] h-[3.125rem] border-[#8a8a8a] rounded-[0.3125rem]  mt-[0.75rem]" type='email' name='email' id='email '/>
                    <ErrorMessage name='email'/>

            </div>
            
            <div className='flex flex-col mt-[1.88rem]'>
            <Field name="phone" component={Phone} />
            <ErrorMessage name='phone'/>
                  
            </div>

            <div className='flex flex-col'>
            
                    <label className="text-black font-medium leading-4" htmlFor='password'>Password</label>
                        <Field className="border-[1px]  w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] mt-[0.75rem] " type="password" name="password" id="password"></Field>
                        <ErrorMessage name='password'/>
            </div>
            
            <div className='flex flex-col'>
            
            <label className="text-black font-medium leading-4 " htmlFor='confirmpassword'>ConfirmPassword</label>
                <Field className="border-[1px]  w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] mt-[0.75rem] " type="password" name="confirmpassword" id="confirmpassword"></Field>
                <ErrorMessage name='confirmpassword'/>
            </div>

            <div className='mt-[0.75rem] text-base font-normal tracking-tight leading-4'>
            Already have an account? <span className='text-[#484FA2] text-base font-normal tracking-tight'>Login</span> 
            </div>

            <button type='submit' className=' mt-[3.75rem] w-[28.125rem] h-[3.13rem] rounded-[0.3125rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Sign Up</button>




        </Form>

       


    </Formik>

    
    </div>

  </div>
   
  )
}
export default SignupForm