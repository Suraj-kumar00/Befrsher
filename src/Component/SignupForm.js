import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import formgirlimage from "../Images/formgirlimage.jpg"
import CustomInput from './CustomInput'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import facebooklogo from '../Images/facebooklogo.svg'
import clsx from 'clsx';
import { useState } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password';
import right from "../Images/rightgreenbackground.svg"
YupPassword(Yup);



const initialValues={
  name:'',
  phone:'',
  otp:'',
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
  ,  'Phone number is not valid').min(10,'number must be atleast 10 digit').required('Phone Required'),
  otp:Yup.string().required("Otp Required"),

  password:Yup.string().required('Password Required'),

  confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Required"),

})


  
function SignupForm() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activeButtonLogin, setActiveButtonLogin] = useState(0);
  const [user,setUser] = useState({ })
  const [otpField,setOtpField] = useState(0)
  const [rightField,setRightField] = useState(0)
  // const [submitField,setSubmitField] = useState(0)
  console.log("rightfield",rightField)
console.log("otp",otpField)
  const SignupHandler = () =>{
      setActiveButtonIndex(1) ;
       setActiveButtonLogin(0);
  }

  const LoginHandler = () => {
      setActiveButtonLogin(1) ;
      setActiveButtonIndex(0);
  }
  
  const resetField = () => {
    // setSubmitField(0)
    setOtpField(0)
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
const signInDivxl =      document.getElementById("signInDiv-xl")
const signInDivmd =      document.getElementById("signInDiv-md")
const signInDivsm1 =      document.getElementById("signInDiv-sm1")
const signInDivsm2 =      document.getElementById("signInDiv-sm2")

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

window.google.accounts.id.renderButton(
signInDivxl,{
        theme:'outline',
        size:"large",
        shape:'pill',
        logo_alignment: "center",
        click_listener: onClickHandler,
        width:400,
}
)

window.google.accounts.id.renderButton(
    signInDivmd,{
        theme:'outline',
        size:"large",
        shape:'pill',
        logo_alignment: "center",
        click_listener: onClickHandler,
        width:400,
    }
    )
window.google.accounts.id.renderButton(
        signInDivsm1,{
            theme:'outline',
            size:"large",
            shape:'pill',
            logo_alignment: "center",
            click_listener: onClickHandler,
            width:370,
        }
        )
window.google.accounts.id.renderButton(
          signInDivsm2,{
              theme:'outline',
              size:"large",
              shape:'pill',
              logo_alignment: "center",
              click_listener: onClickHandler,
              width:316,
          }
          )
window.google.accounts.id.prompt();
    },[])

    
 
return (
  <div className=" grid  sm:m-auto md:gap-x-0  sm:gap-y-1 sm:place-items-center 4xl:grid-cols-2 gap-[5.62rem] justify-items-center mt-[0.5rem]  lg:grid lg:grid-cols-7 lg:gap-10 xl:gap-10  md:grid md:grid-rows-7 md:grid-cols-1  2xl:w-full box-border overflow-hidden ">

    <div className="flex justify-items-center items-center sm:mb-0 ml-[6.56rem]  md:mx-auto  mt-[0.5rem] sm:max-w-[25.25rem] md:max-w-[28.25rem] md:row-span-1 md:mb-0 4xl:hidden md:block md:col-span-3  rounded-[2rem]" >
        <img className="  w-full h-[100%] rounded-[2rem] "src={formgirlimage} alt="girlimg"/>
      </div>
    <div  className="sm:ml-[0rem] sm:mx-auto max-w-[31.25rem]  sm:max-w-full sm:justify-items-center max-h-[50.625rem] lg:ml-[2rem] ml-[6.56rem] mt-[0.5rem] mb-[1rem] md:row-span-6   md:ml-1 md:mt-1 sm:w-screen  sm:grid sm:grid-cols-1 lg:col-span-4 sm2:mx-8 ">
    <Formik
  initialValues={initialValues}
  validationSchema = {validationSchema}
  onSubmit = {onSubmit}>
      <Form  className="mt-0  max-w-[28.25rem] max-h-[50.625rem] flex flex-col sm1:max-w-[372px] ">
      <div className='flex justify-between xl:gap-8'>       

      <div onClick={SignupHandler}
      className={clsx(
          {  "text-white bg-[#484FA2]" : activeButtonIndex===1,
           "text-black" : activeButtonIndex===0
          } ,
          ' flex justify-center items-center 4xl:w-[12.5rem] h-[3.125rem] rounded-[0.3125rem]  text-[#fff] text-[1.3125rem] border-[#484FA2] border-[1px] font-semibold leading-1.31 tracking-light  lg:w-[6.5rem] md:w-[12.5rem] sm:w-[7.5rem] xl:w-[7.8 rem] '
          )}>Sign Up</div>
      <div onClick={LoginHandler}
      className={clsx(
          {  "text-white bg-[#484FA2]" : activeButtonLogin===1,
           "text-black" : activeButtonLogin===0
          } ,
          ' xl:mr-0 4xl:mr-0 flex justify-center items-center 4xl:w-[12.5rem] h-[3.125rem] rounded-[0.3125rem] border-[1px] border-[#484FA2]  text-[1.3125rem] font-semibold leading-1.31 tracking-light text-black md:w-[12.5rem] sm:w-[7.5rem] lg:w-[6.5rem] xl:w-[7.8 rem]')}>Login</div>

      </div>
          
        

          <div className='flex flex-col mt-[1rem]'>
                      <Field className="flex border-[1px] border-[#8a8a8a] max-w-[28.125rem]  h-[3rem]  py-[0.8rem] pl-[1.56rem] rounded-[0.3125rem] 4xl:min-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[0rem] sm:min-w-[24rem] sm1:min-w-[0rem]  focus:outline-none" type="text" id="name" name="name" placeholder="Full Name *" />
                      <ErrorMessage name='name'/>
          </div>
          
          <div className='flex flex-col  '>
                        <div className=' flex justify-between  mt-[1rem] border-[1px]  border-[#8a8a8a] py-[0.2rem]  pl-[1.56rem]  4xl:max-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem]  md:min-w-[0rem] sm:min-w-[24rem] sm1:min-w-[18rem]  h-[3.125rem] max-h-[3rem] rounded-[0.3125rem] '>
                        <Field className="flex justify-center  focus:outline-none " type="text" name="phone" id="phone" placeholder="Phone*"></Field>
                 {    
                    rightField === 0 ?
                    <button type="button" onClick={() => {
                 
                      setOtpField(1)
                      console.log("dddd",otpField)}} className="flex  items-center text-[1rem] text-[#484FA2] mr-8 ">Verify</button>
                      : 
                      <div className="flex  items-center mr-8">
                      <img src={right} alt="hh"></img>
                    </div>

                 }        
                 
                        
                        </div>
                       
                        <ErrorMessage name='phone'/>  
          </div>

         <div id='otp' className={clsx(
          {
            "block flex-col": otpField===1,
            " hidden flex-col": otpField===0,

          },'flex flex-col '
         )}
          >
               <div className="flex  items-center rounded-[0.3125rem]  pl-[0.2rem] lg:pl-0 max-w-[28.125rem]   4xl:min-w-[28.125rem]     sm1:min-w-[18rem]flex justify-between  mt-[1rem] border-[1px]  border-[#8a8a8a] py-[0.2rem]    4xl:max-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem]  md:min-w-[0rem] sm:min-w-[24rem] sm1:min-w-[18rem]  h-[3.125rem] max-h-[3rem]">  
                         <div className = '4xl:ml-[1.56rem]   4xl:min-w-[5rem] text-[#484FA2]'>Enter otp</div>
                         <Field className="flex justify-center items-center sm2:w-[100px] sm2:pl-4 4xl:ml-[1rem] sm2:ml-1 sm1:w-[80px] py-[0.3rem] 4xl:px-2  focus:outline-none " type="text" name="otp" id="otp" placeholder="xxxxxx"></Field>
                         <button type="submit" onClick={() => {
                          setOtpField(0)
                          setRightField(1);
                          onSubmit()
                          
                         }} className="flex justify-center items-center ml-[5rem]  text-[#484FA2] 4xl:mr-7 lg:ml-[3rem] sm:ml-8 sm2:ml-1" >Submit</button>
               </div>
               <ErrorMessage name='otp'/>
   </div>

           <div className='flex flex-col mt-[1rem]'>
          
                      <Field className="flex border-[1px] py-[0.8rem] pl-[1.56rem] max-w-[28.125rem] max-h-[3rem] border-[#8A8A8A] rounded-[0.3125rem]  4xl:min-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[0rem] sm:min-w-[24rem]  sm1:min-w-[0rem]   focus:outline-none" type="password" name="password" id="password" placeholder="Password*"></Field>
                      <ErrorMessage name='password'/>
          </div>

          <div className='flex flex-col mt-[1rem]'>

                      <Field className="flex border-[1px] py-[0.8rem] pl-[1.56rem] max-w-[28.125rem] h-[3rem] border-[#8A8A8A] rounded-[0.3125rem]  4xl:min-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[0rem] sm:min-w-[24rem] sm1:min-w-[18rem]  focus:outline-none" type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password *"></Field>
                      <ErrorMessage name='confirmpassword'/>
          </div>

          <button type='submit' className='flex justify-center items-center p-4 mt-[1rem] max-w-[28.125rem] h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight   4xl:min-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[0rem] sm:min-w-[24rem]  sm1:min-w-[18rem] leading-1.31 ' >Sign Up</button>
         
          <div className='flex  items-center mt-[0.75rem] text-base font-normal tracking-tight leading-4 max-w-[28.125rem]  w-full'>
          Already have an account? <span className='flex items-center  text-[#484FA2] text-base font-normal tracking-tight ml-2 '>Login</span> 
          </div>

          
          <div className=' mt-[1rem] w-full max-w-[28.125rem] border-[1px] border-[#c1bfbf]'>
          </div>  
          <div   className='mt-[1rem] 4xl:min-w-[28.125rem]  xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[0rem] sm:min-w-[24rem] sm1:min-w-[18rem] h-[3.13rem] '>        
                  <div id="signInDiv"  className='  4xl:min-w-[28.125rem] xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[34rem] sm:min-w-[24rem] sm1:min-w-[18rem] h-[3.13rem] 4xl:block   xl:hidden '></div>
                  <div id="signInDiv-xl"  className=' 4xl:min-w-[28.125rem] xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[34rem] sm:min-w-[24rem] sm1:min-w-[18rem] h-[3.13rem]   4xl:hidden  xl:block md:hidden'></div>
                  <div id="signInDiv-md"  className='md:flex md:items-center md:justify-center 4xl:hidden 4xl:min-w-[28.125rem] xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[0rem] sm:min-w-[24rem] sm1:min-w-[18rem] h-[3.13rem]  sm1:hidden'></div>
                  <div id="signInDiv-sm1"  className='4xl:hidden 4xl:min-w-[28.125rem] xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[34rem] sm:min-w-[24rem] sm1:min-w-[18rem] h-[3.13rem] sm2:hidden   sm1:block'></div>
                  <div id="signInDiv-sm2"  className='4xl:hidden 4xl:min-w-[28.125rem] xl:min-w-[24rem] lg:min-w-[16.6rem] md:min-w-[34rem] sm:min-w-[24rem] sm1:min-w-[18rem] h-[3.13rem]    sm2:block'></div>

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
         

<div className=' flex md:justify-center  sm1:max-w-[372px] sm2:max-w-[317px] md:items-center  md:m-auto  max-w-[28.125rem] w-[25rem]  mt-[1rem]  2xl:mt-4 max-h-[3.125rem] md:mb-2 4xl:mb-2'>
<FacebookLogin
                   appId="" //APP ID NOT CREATED YET         fields="name,email,picture"   
                   autoLoad     
                   callback={responseFacebook}       
                   className="w-[300.125rem]   "     
                   render={renderProps => (
          <button className=" md:flex p-2 px-12 flex justify-center items-center gap-[0.75rem]  w-full  rounded-full border-[1px] border-[#dad9d9]" onClick={renderProps.onClick}><span className='inline-block w-[25px] h-[25px] text-base font-medium leading-4 tracking-tight'> <img src={facebooklogo } alt="facebooklogin"  /></span>Sign up with Facebook</button>
        )}
    />
</div>
      </Form>

  </Formik>

    </div>  

      <div className="mb-[1rem]  max-h-[50.625rem] shadow-my_shadow rounded-[2rem] mt-[0.5rem]  md:hidden 4xl:block  lg:col-span-3 max-w-[35rem]  " >
        <img className="h-full w-full rounded-[2rem] object-cover" src={formgirlimage} alt="girlimg"/>
      </div>
      
  </div>
 
)
}
export default SignupForm