import React from 'react'
import { useState } from 'react';
import '../../Styles/Contact.css'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "31169d91-4124-4598-8266-3fec075864fa");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div>
      
        <div className='contact-page'>
        <div className='form'>
        <h1 className='contact-heading'>Let's Work Together</h1>
        <form onSubmit={onSubmit}>
            <label for="name">What's your name?</label>
        <input type="text" name="name" placeholder='John Doe' required/>
        <label for="email">What's your email?</label>
        <input type="email" name="email" placeholder='john@doe.com' required/>
        <label for="message">Your message</label>
        <textarea name="message" required placeholder='Hello Mikaila, can you help me with...'></textarea>

        <button type="submit">Submit</button>

      </form>
      <span>{result}</span>
</div>
<div className='contact-side'>
<h3>Contact Information </h3>
<p>
<ul>
  <li><span className='bold'>Email:</span> iverymikaila@gmail.com</li>
  <li><span className='bold'>Phone:</span> Request via Email</li>
</ul>
</p>
<h3>Social Media </h3>
<ul>
    <li><a href='https://www.instagram.com/fkamynk/' target='_blank'>Instagram</a></li>
    <li><a href='https://www.pinterest.com/fkamynk/_pins/' target='_blank'>Pinterest</a></li>
    <li><a href='https://www.youtube.com/@Fkamynk' target='_blank'>YouTube</a></li>
</ul>
</div>
        </div>
      
    </div>
  )
}

export default Contact;