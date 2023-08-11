import React from 'react'
import formgirlimage from "../Images/formgirlimage.jpg"
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import MyTextArea from './CustomTextArea';


const initialValues={
  fashionid:"",
  dob:"",
  city:"",
  area:"",
  whatsappnum:"",
  bio:"",
  terms:false,
  promomsg:false,

}

const onSubmit= values=>{
  console.log("Form Values",values)
}

  function validateDateString(dateString) {
  // regex for date string format: dd/mm/yyyy
  const dateFormatRegex = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])[\/]\d{4}$/;
  const val = dateString.target.value;
  let isValidDate = false;
  if (String(val).match(dateFormatRegex)) {
     const dateParts = val.split('/');
     if (dateParts.length === 3) {
        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);
        // valid month range is 1 - 12
        if (month < 1 || month > 12) {
           return false;
        }
        // validate days in month
        const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
        let monthLength = daysInMonth[month-1];
        if ((month === 2) && ((!(year%4) && year%100) || !(year%400))) {
           monthLength = 29;
        }
        if (day < 1 || day > monthLength) {
           return false;
        }
        // checks have passed
        isValidDate = true;
     }
  }
  return isValidDate;
}
// console.log("validdate",validateDate)
const validationSchema = Yup.object({
  fashionid:Yup.string(),
      dob:Yup.string().required("Required")
,
      city:Yup.string().required("Required"),
      area:Yup.string().required("Required").matches(/^[0-9]+$/, "Must be only digits").min(6, 'Must be exactly 6 digits').max(6, 'Must be exactly 6 digits'),
      whatsappnum:Yup.string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ,  'Phone number is not valid').min(10,'number must be atleast 10 digit').required(),
      bio:Yup.string().nullable(),
      terms: Yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
      promomsg: Yup.boolean(),
})

function SetUpYourStyle() {

  const handleClick = (event, text) => {

    console.log(event)
    const { name } = event.currentTarget;
    console.log("current target",event.currentTarget)
    console.log("target",event.target)

    console.log("Button is clicked", name);

    if (name === "button1") alert(`Button1 is clicked : ${text}`);
    if (name === "button2") alert(`Button2 is clicked : ${text}`);
  };


 
return (
  <div className="grid  xl:max-h-vh justify-center  2xl:gap-0 4xl:gap-[16rem] grid-cols-2 sm:flex sm:flex-col  2xl:text-[1.3125rem] 4xl:text-[1.5rem] sm:p-4 sm:m-2 sm:justify-center sm:items-center  ">
         <div className="flex justify-center items-center shadow-lg rounded-[2rem]  max-w-full  md:max-h-full  2xl:max-h-screen 4xl:max-h-screen sm:block 4xl:hidden  " >
                    <img className=" h-full rounded-[2rem]" src={formgirlimage} alt="girlimg"/>
         </div>

    <div  className=" 2xl:max-h-full flex sm:mt-4 md:max-h-full m-1 4xl:max-w-full 4xl:w-full sm:max-w-md 4xl:max-h-screen ">
    <Formik
  initialValues={initialValues}
  validationSchema = {validationSchema}
  onSubmit = {onSubmit}>  
      <Form  className="px-5 xl:px-4 xl:mx-4 lg:mx-1 2xl:ml-[3.5rem] 4xl:ml-[5rem] sm:w-full lg:max-w-full 2xl:max-w-[28.25rem] 4xl:max-w-full  4xl:w-[68rem] 4xl:max-h-screen ">

    
          <div className='flex justify-center items-center '>
                <div className=' 2xl:max-w-[18.75rem] max-h-[3.125rem] flex justify-center items-center sm:max-w-full   rounded-[0.3125rem]  bg-[#494DA2] text-white sm1:text-[1.2rem]  4xl:text-[1.3125rem]  2xl:p-2  2xl:px-8 4xl:p-6 font-semibold leading-1.31 tracking-tight' >Setup Your Style</div>
          </div>

          

          <div className='flex flex-col mt-[0.8rem]'>
                      <Field className="border-[1px] max-h-[3.125rem] border-[#8a8a8a] sm:max-w-full  4xl:max-w-full  2xl:max-h-[2.125rem]  py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem]  4xl:text-[1rem] lg:text-[0.8rem] xl:text-base" type="text" id="fashionid" name="fashionid" placeholder="Fashion ID" />
                      <ErrorMessage name='fashionid' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-sm"/>
          </div>

          <div className='flex flex-col mt-[0.8rem] sm1:mt-4 '>
                      <Field className="4xl:max-h-[3.125rem] flex justify-center items-center  border-[1px] border-[#8a8a8a]  4xl:max-w-full 2xl:max-h-[2.125rem]     py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem]   4xl:text-[1rem] lg:text-[0.8rem] xl:text-base" onInput={validateDateString} type="text" id="dob" name="dob" placeholder="Date Of Birth *(mm/dd/yyyy)" />
                      <ErrorMessage name='dob' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-sm"/>
          </div>
          
       

          <div className="flex flex-col justify-start mt-[0.8rem] sm1:mt-4">    
               <p className='text-[#8a8a8a] 4xl:text-[1rem] font-medium leading-4 -tracking-tight 2xl:mb-1 4xl:mb-2 text-left'>Gender *</p>
                <div className="flex  4xl:justify-between 4xl:gap-8 md:gap-2 4xl:items-center  mt-[0.2rem] ">
                            <button type="button"
                              className=' flex justify-center items-center lg:w-[18rem] md:mt-1  4xl:py-[0.9rem] 4xl:px-[2rem]  lg:px-2 2xl:max-w-full md:w-full   4xl:max-w-[18rem]  border-[#8a8a8a] border-[0.06rem] 2xl:py-[.5rem] px-[2.63rem] 4xl:text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'
                              name="Male"
                              onClick={(event) => handleClick(event, "Male")}
                            >
                              Male
                            </button> 

                             <button type="button"
                              className= 'lg:px-2 md:w-full flex justify-center lg:w-[18rem] items-center md:mt-1 4xl:py-[0.9rem] 4xl:px-[2rem]   2xl:max-w-full 4xl:max-w-[18rem]  border-[#8a8a8a] border-[0.06rem] 2xl:py-[0.5rem] px-[2.63rem] 4xl:text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'

                              name="Female"
                            >
                              Female
                            </button>
                             <button type="button"
                              className='md:w-full 4x:max-h-[4.125rem]  flex justify-center lg:w-[18rem] items-center md:mt-1  4xl:py-[0.9rem] 4xl:px-[2rem]  lg:px-2 2xl:max-w-full  4xl:max-w-[18rem] max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] 2xl:py-[0.5rem] px-[2.63rem] 4xl:text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem] '
                              name="Special"
                            >
                              Special
                            </button>
                </div>
         

          </div>
          
          <div className='flex 4xl:flex-row 4xl:justify-between  md:flex-col mt-[0.8rem] md:mt-5'>
                  <div className='flex flex-col   '>
                  <Field className="4xl:max-h-[3.125rem] flex text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] md:max-w-full  4xl:max-w-[19rem]  2xl:max-w-[10rem] 2xl:max-h-[2.125rem]  py-[1.03rem]  pl-[1.56rem] rounded-[0.3125rem]  4xl:text-[1rem] lg:text-[0.8rem] xl:text-base"  type="text" id="city" name="city" placeholder="City *" />
                  <ErrorMessage name='city' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-sm"/>
                  </div>
                  <div className='flex flex-col '>
                  <Field className="4xl:max-h-[3.125rem]  md:mt-1 sm:mt-[0.8rem] flex text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] md:max-w-full  4xl:max-w-[19rem] 2xl:max-w-[10rem]  2xl:max-h-[2.125rem]  py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]  4xl:text-[1rem] lg:text-[0.8rem] xl:text-base"  type="text" id="area" name="area" placeholder="Pincode *" />
                            <ErrorMessage name='area' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-sm"/>
                  </div>
          </div>

          <div className='flex flex-col mt-[0.8rem] md:mt-5'>
                <Field className="4xl:max-h-[3.125rem] text-[#8a8aa8]  border-[0.06rem] border-[#8a8a8a] lg:max-w-full 4xl:max-w-full  2xl:max-h-[2.125rem]  w-full py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]  4xl:text-[1rem] lg:text-[0.8rem] xl:text-base"  type="text" id="whatsappnum" name="whatsappnum" placeholder="Whatsapp &#10; number *" />
                <ErrorMessage name='whatsappnum' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-sm"/>
          </div>

          <div className='flex flex-col mt-[0.8rem] md:mt-5 4xl:max-w-full  4xl:text-[1rem] lg:text-[0.8rem] xl:text-base'>
                  <MyTextArea
                  label=""
                  name="bio"
                  rows="2"
                  placeholder="Bio"
                />
          </div>

          <div className='flex md:flex-col mt-[0.8rem] md:mt-2 4xl:mt-1 '>
            <div className="flex mt-[0.8rem] md:mt-2"> 
            {/* //added className  */}
            <Field type="checkbox" name="terms" />
                
                <label className=" ml-[0.75rem] font-medium 2xl:text-xs leading-3 -tracking-normal text-[rgb(72,79,162)] 4xl:text-sm">
                  Terms & Conditions *
                </label>

            </div>
          
          <ErrorMessage component="div" className="flex items-end border-2 border-green-200 text-red-500 2xl:text-xs italic ml-2 4xl:text-xs" name='terms' />

          </div>


          <div className='flex mt-[0.8rem] md:mt-2 '>
          <Field type="checkbox" name="promomsg"  />

                <label className="sm1:tracking-tighter  sm1:text-left ml-[0.75rem] font-medium 2xl:text-xs leading-3 -tracking-normal text-[#484FA2] 4xl:text-sm  4xl:mt-1">
                Get Promotional messages through whatsapp 
                </label>
{/* //sm1 tracking and textleft added */}
          </div>

          <button type="submit" className=' max-h-[3.125rem] flex justify-center items-center sm:max-w-full  mt-[0.8rem]  4xl:max-w-full    w-full 2xl:max-h-[3.13rem] rounded-[2.5rem]  bg-[#494DA2] text-white sm1:text-[1.2rem] 4xl:text-[1.25rem]  2xl:p-1 4xl:p-6 font-semibold leading-1.31 tracking-tight' >Continue</button>
          <button type='button' className=' max-h-[3.125rem] flex justify-center items-center sm:max-w-full 2xl:p-1 2xl:mt-[0.69rem] 4xl:mt-3 4xl:mb-2   4xl:max-w-full w-full 2xl:max-h-[3.13rem]  rounded-[2.5rem] bg-[#494DA2] text-white 4xl:text-[1.25rem] sm1:text-[1.2rem]  4xl:p-6 font-semibold leading-1.31 tracking-tight' >Skip For Now</button>

      </Form>

  </Formik>

    </div>  

       <div className="shadow-my_shadow rounded-[2rem] relative m-8   4xl:block sm:hidden " >
        <img className="h-full absolute inset-0 w-full rounded-[2rem] object-cover object-center " src={formgirlimage} alt="girlimg"/>
      </div> 
      
  </div>
 
)
}
export default SetUpYourStyle