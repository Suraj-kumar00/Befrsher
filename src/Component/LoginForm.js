import React from 'react'
import { useState,useEffect  } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import clsx from 'clsx';
import CustomInput from './CustomInput';
import * as Yup from 'yup'
import LoginFormGirlImg from "../Images/LoginFormGirlImg.svg"
import jwt_decode from 'jwt-decode'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import facebooklogo from '../Images/facebooklogo.svg'


const initialValues={
    phone:'',
    otp:'',
    password:'',
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validationSchema = Yup.object({
    phone:Yup.string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    ,  'Phone number is not valid').min(10,'number must be atleast 10 digit').required(),

    otp:Yup.number().typeError("Must be a number").required()
    ,
    password:Yup.string().required().min(8,
                'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
                  )
                  .minLowercase(1, 'password must contain at least 1 lower case letter')
                  .minUppercase(1, 'password must contain at least 1 upper case letter')
                  .minNumbers(1, 'password must contain at least 1 number')
                  .minSymbols(1, 'password must contain at least 1 special character')
        })


const LoginForm = () => {
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

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) =>{

      console.log(response.credential)
      var userObject =jwt_decode(response.credential)
      console.log(userObject)
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true;
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



  return (
    <div className="grid grid-cols-2 gap-[5.63rem] justify-items-center border-2 border-red-500 mt-[2.19rem]">

      <div  className=" max-w-[31.25rem] max-h-[50.625rem] ">

            <Formik
            initialValues={initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}>
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
        
        <div className='flex flex-col mt-[2.62rem]'>
            <CustomInput
            label=""
            name="phone"
            type="text"
            placeholder="Phone*"
          />
         
        </div>

            <div className='flex flex-col mt-[2.62rem] '>
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

<div className=' flex justify-center max-w-[28.125rem] h-[3.13rem] mt-[1.88rem]'>
<FacebookLogin
         appId="" //APP ID NOT CREATED YET         fields="name,email,picture"   
                    autoLoad     
                   callback={responseFacebook}       
                     className="w-[28.125rem]   h-[3.13rem]"     
                    render={renderProps => (
            <button className="flex justify-center items-center gap-[0.75rem] max-w-[25.125rem] w-full max-h-[2.5rem] rounded-full border-[1px] border-[#dad9d9]" onClick={renderProps.onClick}><span className='inline-block w-[25px] h-[25px] text-base font-medium leading-4 tracking-tight'> <img src={facebooklogo } alt="facebooklogin"  /></span>Sign up with Facebook</button>
          )}
      />
</div>
                    </Form>


            </Formik>

    </div>

      <div className="shadow-my_shadow rounded-[2rem] border-2 border-orange-400 max-w-[39.75rem max-h[50.2075]]" >
          <img className="h-[100%] rounded-[2rem]" src={LoginFormGirlImg} alt="girlimg"/>
        </div>

</div>
  )

}

export default LoginForm