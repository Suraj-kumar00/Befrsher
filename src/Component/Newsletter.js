import React from 'react'

export const Newsletter = () => {
  return (
    <section className="w-[89.4375rem] h-[29.8125rem] flex"> 
            <h1>Get 25% off on your first order</h1>
            <p>Want exclusive offers and first access to Produt? Sign up for Newsletter</p>

            {/* <form action="">
                    <label for="email">Enter email addresses:</label>
                    <input type="email" id="emails" name="email" >
                    <input type="submit" value="Subscribe">
            </form> */}
            <form clasName="flex">
                <label for ="email"></label>
                <input type="email" name="email" placeholder='Enter Your email'/>
                <input type="submit" value="Subscribe"/>
            </form>
            <p>By entering the email,you agree to our <a href="#">Terms of condition </a>and <a href="#">Privacy Notice</a>, including receipt of emails and Promotions.You can unsubscribe at anytime</p>

    </section>
  )
}
