import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import formgirlimage from "../Images/formgirlimage.jpg"
import PhoneInput from "react-phone-input-2"
import CustomInput from './CustomInput'

// import { GoogleLogin } from '@react-oauth/google';
// import GoogleButton from 'react-google-button'
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import facebooklogo from '../Images/facebooklogo.svg'

import clsx from 'clsx';
import { useState } from 'react';

import {Formik,Form,Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'
import YupPassword from 'yup-password';
YupPassword(Yup);


const initialValues={
    name:'',
    email:'',
    phone:'',
    password:'',
    confirmpassword:'',
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),

    phone:Yup.string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    ,  'Phone number is not valid').min(10,'number must be atleast 10 digit'),

    password:Yup.string().required('PasswordRequired').min(8,
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
    const [user,setUser] = useState({ })



    const SignupHandler = () =>{
        setActiveButtonIndex(1) ;
         setActiveButtonLogin(0);
    }

    const LoginHandler = () => {
        setActiveButtonLogin(1) ;
        setActiveButtonIndex(0);
    }
        const responseGoogle = (response) =>{

            console.log(response.credential)
            var userObject =jwt_decode(response.credential)
            console.log(userObject)
            setUser(userObject)
            document.getElementById("signInDiv").hidden = true;
        }
      const responseFacebook = (response) => {
        console.log(response);
      }
      function handleSignOut(event){

        setUser({});
        document.getElementById("signInDiv").hidden = false;
       window.google.accounts.id.disableAutoSelect();
  
      }

      function onClickHandler(){
        console.log("Sign in with Google button clicked...")
      }

      useEffect(()=>{
           // eslint-disable-next-line no-undef
     window.google.accounts.id.initialize({
        client_id:"",
        callback:responseGoogle,
        // ux_mode: "redirect"
})

const signInDiv =      document.getElementById("signInDiv")
// eslint-disable-next-line no-undef
window.google.accounts.id.renderButton(

signInDiv,{

    theme:'outline',
    size:"large",
    width:400,
    text: "signup_with",
    shape:'pill',
    logo_alignment: "center",
    click_listener: onClickHandler
}
)

window.google.accounts.id.prompt();



      },[])


 
// const CustomInputComponent = ({
//   field, // { name, value, onChange, onBlur }
//   form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//   ...props
// }) => (
//   <div>
//     <input type="number" {...field} {...props} />
//     {touched[field.phone] &&
//       errors[field.phone] && <div className="error">{errors[field.phone]}</div>}
//   </div>
// );

   
  return (
    <div className="grid grid-cols-2 gap-[5.62rem] justify-items-center mt-[2.19rem]">


      <div  className="  max-w-[31.25rem] max-h-[50.625rem] ">
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
            
          

            <div className='flex flex-col mt-[3.62rem]'>
                        <Field className="border-[1px] border-[#8a8a8a] max-w-[28.125rem]  h-[3.125rem]  py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem]" type="text" id="name" name="name" placeholder="Full Name *" />
                        <ErrorMessage name='name'/>
            </div>
            
            <div className='flex flex-col mt-[3.62rem]'>
            <CustomInput
            label=""
            name="phone"
            type="text"
            placeholder="Phone*"
          />
            </div>
            <div className='flex flex-col mt-[3.62rem]'>
            
                        <Field className="border-[1px]    py-[1.06rem] pl-[1.56rem]    max-w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] " type="password" name="password" id="password" placeholder="Password*"></Field>
                        <ErrorMessage name='password'/>
            </div>
            
            <div className='flex flex-col mt-[3.62rem]'>

                      
            </div>

            <div className='mt-[0.75rem] text-base font-normal tracking-tight leading-4'>
            Already have an account? <span className='text-[#484FA2] text-base font-normal tracking-tight'>Login</span> 
            </div>

            <button type='submit' className='p-4 mt-[3.75rem] max-w-[28.125rem] w-full h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Continue</button>
            <button type='submit' className='p-4 mt-[3.75rem] max-w-[28.125rem] w-full h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Skip For Now</button>

        </Form>

    </Formik>

      </div>  

        <div className="shadow-my_shadow rounded-[2rem] border-2 border-orange-400 max-w-[39.75rem max-h[50.2075]]" >
          <img className="h-[100%] rounded-[2rem]"src={formgirlimage} alt="girlimg"/>
        </div>
        
    </div>
   
  )
}
export default SignupForm