import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser'
const Contact = () => {
const formRef = useRef();
const[loading,setLoading]=useState(false);
const[form,setForm]=useState({
    name:'',
    email:'',
    message:''
})
const handleChange=({target:{name,value}})=>{
  setForm({...form,[name]:value})
}
//EJJr1sbxLv3lRPBbw
//service_9txbrel
//xyzXYZ@2024
//template_lhw8lwn
const handleSubmit=async (e)=>{
  e.preventDefault();
  setLoading(true);
  try{
    await emailjs.send(
    'service_9txbrel',
    'template_lhw8lwn',
    {
      from_name:form.name,
      to_name:'Aadil Parmar',
      from_email:form.email,
      to_email:'aadil.parmar25official@gmail.com',
      message:form.message
     
    },
    'EJJr1sbxLv3lRPBbw'
  )
setLoading(false)
alert('Message Sent !')
setForm({
  name:'',
    email:'',
    message:''
})
}

  catch(error){
    alert('Something went worng!')
    console.log(error);
  }
}
    return (
    <section className="c-space my-20"id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col bg-white-500 rounded-xl">
        {/* <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-fit"
        /> */}
        <div className="contact-container xl:my-16">
          <h3 className="head-text ">Contact Me</h3>
          <p className="text-lg text-white-600">
            Where you are looking to build the new website,improve your exsiting
            platform, or bring a unique project to life , I'm here to help you!.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
                <span className="field-label">
                    Your Full Name
                </span>
                <input type="text" name="name" value={form.name} onChange={handleChange}required className="field-input"placeholder="Your Name" />
            </label>
            <label className="space-y-3">
                <span className="field-label">
                    Your EMail
                </span>
                <input type="email" name="email" value={form.email} onChange={handleChange}required className="field-input"placeholder="xyz@gmail.com" />
            </label>
            <label className="space-y-3">
                <span className="field-label">
                    Message for Me
                </span>
                <textarea type="text" name="message" value={form.message} onChange={handleChange}required className="field-input" rows={3} placeholder="Hello aadil..." />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>{loading?'Sending...':'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
