import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import formgirlimage from "../Images/formgirlimage.jpg"
import PhoneInput from "react-phone-input-2"
import CustomInput from './CustomInput'

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
    <div className="grid grid-cols-2 gap-[5.62rem] justify-items-center">


      <div  className="formikdiv  max-w-[31.25rem] max-h-[50.625rem] ">
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
                    {/* <label className="text-black font-medium leading-4" htmlFor='name'>Name</label> */}
                        <Field className="border-[1px] border-[#8a8a8a] max-w-[28.125rem]  h-[3.125rem]  py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem]" type="text" id="name" name="name" placeholder="Full Name *" />
                        <ErrorMessage name='name'/>
            </div>
            
            <div className='flex flex-col mt-[3.62rem]'>
            {/* <label className="text-black font-medium leading-4" htmlFor='phone' >Phone Number JI</label> */}
            <CustomInput
            label=""
            name="phone"
            type="text"
            placeholder="Phone*"
          />
           {/* <Field  component={CustomInputComponent} className="border-[1px] border-[#8a8a8a] w-[28.125rem]  h-[3.125rem]   rounded-[0.3125rem] mt-[0.75rem]" type="number" id="phone" name="phone" >
                         
          </Field> 
          <ErrorMessage name='phone'/> */}
            </div>
            <div className='flex flex-col mt-[3.62rem]'>
            
                        <Field className="border-[1px]    py-[1.06rem] pl-[1.56rem]    max-w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] " type="password" name="password" id="password" placeholder="Password*"></Field>
                        <ErrorMessage name='password'/>
            </div>
            
            <div className='flex flex-col mt-[3.62rem]'>

                        <Field className="border-[1px] py-[1.06rem] pl-[1.56rem] max-w-[28.125rem] h-[3.125rem] border-[#8A8A8A] rounded-[0.3125rem] " type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password *"></Field>
                        <ErrorMessage name='confirmpassword'/>
            </div>

            <div className='mt-[0.75rem] text-base font-normal tracking-tight leading-4'>
            Already have an account? <span className='text-[#484FA2] text-base font-normal tracking-tight'>Login</span> 
            </div>

            <button type='submit' className='p-4 mt-[3.75rem] max-w-[28.125rem] w-full h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Sign Up</button>


            <div className=' mt-[1.88rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="2" viewBox="0 0 500 2" fill="none">
            <path d="M0 1H500" stroke="#8A8A8A"/>
            </svg>
            </div>

            <div   className=' mt-[1.88rem]  w-[28.125rem] h-[3.13rem] flex items-center justify-center'>        
            <div id="signInDiv"  className=' '></div>
            { Object.keys(user).length !== 
          <button onClick={(e) => handleSignOut(e)}>SignOut</button>
 
            }
        
         {user && 
                    <div>
                      { user.picture &&
                      <img src={user.picture} alt="userpic"/>

                      }
                      <h3>{user.name}</h3>
                    </div>

            } 
            </div>            
           
{/* <div className='border-2 border-gray-500 w-[28.125rem] h-[3.13rem]'>
<FacebookLogin
         appId="" //APP ID NOT CREATED YET         fields="name,email,picture"         autoLoad         callback={responseFacebook}         className="w-[28.125rem] h-[3.13rem]"         render={renderProps => (
            <button className="flex justify-center items-center gap-[0.75rem] w-[28.125rem] h-[3.13rem] rounded-[0.3125rem] border-[1px] border-[#1f1f1f]" 
            onClick={renderProps.onClick}><span className='inline-block w-[30px] h-[30px] text-base font-medium leading-4 tracking-tight'> <img src={facebooklogo } alt="facebooklogin"  /></span>Sign up with Facebook</button>
          )}
      />
</div>
         */}


        </Form>

       


    </Formik>

      </div>  

        <div className="shadow-my_shadow rounded-[2rem] " >
          <img className="h-[100%] rounded-[2rem]"src={formgirlimage} alt="girlimg"/>
        </div>
        
    </div>
   
  )
}
export default SignupForm