
import SectionHeading from '../SectionHeading';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = React.useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_skirllj', 'template_p0ifg7d', form.current, 'G7kSteMVRgcy353q2')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setMessage('Email sent');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="container site-section" id="contact">
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-center text-gray-800">
        <div class="max-w-[700px] mx-auto px-3 lg:px-6">
          <h2 class="text-3xl font-bold mb-12">Contact Me</h2>
          {message && <p className="emailMessage">{message}</p>}
          <form ref={form} onSubmit={sendEmail}>
        <div class="form-group mb-6">
          <input type="text" class="form-control block
            flex flex-col items-center w-full p-4 sm:flex-row sm:space-x-6 glass-card  contactInput focus:text-gray-700 focus:border-pink-600 focus:outline-none" id="exampleInput7"
            name="user_name"
            placeholder="Name"/>
        </div>
        <div class="form-group mb-6">
          <input type="email" class="   flex flex-col items-center w-full p-4 sm:flex-row contactInput sm:space-x-6 glass-card  focus:text-gray-700 focus:border-pink-600 focus:outline-none" id="exampleInput8"
            name="user_email"
            placeholder="Email address"/>
        </div>
        <div class="form-group mb-6">
          <textarea class="
           flex flex-col items-center w-full p-4 sm:flex-row contactInput sm:space-x-6 glass-card  focus:text-gray-700 focus:border-pink-600 focus:outline-none
          " id="exampleFormControlTextarea13" 
          name="message"
          rows="3" placeholder="Message"></textarea>
        </div>
       
        <button value="Send" type="submit" class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
      </form>
    </div>
  </section>


</div>

    </section>
  );
};

export default Contact;
