import React from 'react'
import "./Join.css"
import emailJs from "@emailjs/browser"
import { useRef } from 'react'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailJs.sendForm('service_il0jftl', 'template_0vn15uu', form.current, 'eo2MjzBBhVQl_Y6Y2'
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
return(
    <div className='join' id='join-us'> 
  <div className='left-j'>
  <hr/>
    <div>
        <span className='stroke-text'>READY TO </span>
        <span>LEVEL UP</span>
    </div>
    <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'>WITH US?</span>
</div>
  </div>
  <div className='right-j'>
  <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
    <input type='email' name='user_email' placeholder='enter email'/>
    <button className='btn btn-j'>Join Now</button>
  </form>
  </div>
  
  </div>
)
}

export default Join
