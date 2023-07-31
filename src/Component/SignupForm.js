import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import formgirlimage from "../Images/formgirlimage.jpg"

// import { GoogleLogin } from '@react-oauth/google';
// import GoogleButton from 'react-google-button'
// import FacebookLogin from 'react-facebook-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
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
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),
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
    const [user,setUser] = useState({})



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
  
      }

      useEffect(()=>{
           // eslint-disable-next-line no-undef
     window.google.accounts.id.initialize({
        client_id:"",
        callback:responseGoogle
})

const signInDiv =      document.getElementById("signInDiv")
// eslint-disable-next-line no-undef
window.google.accounts.id.renderButton(

signInDiv,{

    theme:'outline',
    size:"large",
    width:400,
    
}
)

window.google.accounts.id.prompt();



      },[])
   
  return (
    <div className="grid grid-cols-2 gap-[6.56rem] ">


      <div  className="formikdiv ml-[6.56rem] mt-[2.19rem] mb-[3.75rem]">
      <Formik
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
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
       

            <div className='flex flex-col mt-[1.88rem]'>
                    <label className="text-black font-medium leading-4" htmlFor='name'>Name</label>
                        <Field className="border-[1px] border-[#8a8a8a] w-[28.125rem]  h-[3.125rem]   rounded-[0.3125rem] mt-[0.75rem]" type="text" id="name" name="name" />
                    <ErrorMessage name='name'/>
            </div>
            

            <div className='flex flex-col'>
                    <label className="text-black font-medium leading-4" htmlFor = 'email'>Email</label>
                        <Field className="border-[1px] w-[28.125rem] h-[3.125rem] border-[#8a8a8a] rounded-[0.3125rem]  mt-[0.75rem]" type='email' name='email' id='email'/>
                    <ErrorMessage name='email'/>

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


            <div className=' mt-[1.88rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="2" viewBox="0 0 500 2" fill="none">
            <path d="M0 1H500" stroke="#8A8A8A"/>
            </svg>
            </div>

            <div   className='mt-[1.88rem]  w-[28.125rem] h-[3.13rem] flex items-center justify-center'>        
            <div id="signInDiv"  className=' '></div>
            { Object.keys(user).length !== 0 &&
          <button onClick={(e) => handleSignOut(e)}>SignOut</button>


        }
          {/* {user && 
                    <div>
                      { user.picture &&
                      <img src={user.picture} alt="userpic"/>

                      }
                      <h3>{user.name}</h3>
                    </div>

              } */}
            </div>            
           
{/* <div className='border-2 border-gray-500 w-[28.125rem] h-[3.13rem]'>
<FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        autoLoad
        callback={responseFacebook}
        className="w-[28.125rem] h-[3.13rem]"
        render={renderProps => (
            <button className="flex justify-center items-center gap-[0.75rem] w-[28.125rem] h-[3.13rem] rounded-[0.3125rem] border-[1px] border-[#1f1f1f]" 
            onClick={renderProps.onClick}><span className='inline-block w-[30px] h-[30px] text-base font-medium leading-4 tracking-tight'> <img src={facebooklogo } alt="facebooklogin"  /></span>Sign up with Facebook</button>
          )}
      />
</div>
        */}

{/* <div>
<div id="g_id_onload"
     data-client_id=""
     data-context="signup"
     data-ux_mode="popup"
     data-login_uri="http://localhost:3000/"
     data-itp_support="true">
</div>

<div className="g_id_signin w-[660px]"
     data-type="standard"
     data-shape="rectangular"
     data-theme="outline"
     data-text="signup_with"
     data-size="large"
     data-width="450"
     data-logo_alignment="center"
     data-padding="20">
</div>

</div> */}

        </Form>

       


    </Formik>

      </div>  

        <div className="" >
          <img className="h-[100%]"src={formgirlimage} alt="girlimg"/>
        </div>
        
    </div>
   
  )
}
export default SignupForm