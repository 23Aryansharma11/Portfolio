'use client'
import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiMiniPaperAirplane } from "react-icons/hi2"
import validate from 'deep-email-validator'

const Footer = () => {
  const serviceId = "service_gg9b0d3"
  const templateId = "template_ry3ed0h"
  const publicKey = "Sg87HvsjULMUtAoxL"

  const [name, setName] = useState('')
  const [msg, setmsg] = useState("Send")
  const [email, setEmail] = useState('')
  let [message, setMessage] = useState('')
  const [company, setCompany] = useState('')

  const handleSubmit = (e: FormEvent)=>{
    
    e.preventDefault();
    setmsg("Sending...");
    message += ` From: ${company}.`;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Aryan Sharma",
      message: message
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((res)=>{
      console.log("Email sent successfully", res);
      setMessage("");
      setName("");
      setEmail("");
      setCompany("");
      setmsg("Sent")
      setTimeout(()=>{
        setmsg("Send")
      }, 1000)

    }).catch((error)=>{
      console.error(error)
      setmsg("Error")
      setTimeout(()=>{
        setmsg("Send")
      }, 3000)
    })
  }
  return (
    <div className='w-[90%] sm:w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] flex flex-col justify-center items-center' id='get-in-touch'>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Get in touch
      </h1>
      <a href="mailto:23aryansharma11@gmail.com">
      <div className='Welcome-box px-[15px] py-[4px] z-20 border border-[#7042f88b] opacity-[0.6] mb-20'>
          <h1 className='Welcome-text text-[12px]'>23aryansharma11@gmail.com</h1>
        </div>
      </a>
      <h1 className='text-2xl font-semibold mb-5'>Write a message</h1>
      <div className=' w-11/12'>
      <form onSubmit={handleSubmit} className=' z-20 flex flex-wrap justify-center items-center'>
        Hey, I am 
        <input 
        required
        type="text" 
        value = {name}
        id = 'name'
        placeholder='Your Name'
        className='mx-2 Input-box min-w-32 w-36 text-center h-auto bg-transparent px-[15px] py-[4px] z-20 border border-[#7042f88b] opacity-[0.6] focus:outline-none'
        onChange={(e)=> setName(e.target.value)}
        />
        from <input 
        required
        type="text" 
        value = {company}
        id = 'company'
        placeholder='Your Organisation'
        className='mx-2 Input-box min-w-44 w-44  text-center h-auto bg-transparent px-[15px] py-[4px] z-20 border border-[#7042f88b] opacity-[0.6] focus:outline-none'
        onChange={(e)=> setCompany(e.target.value)}
        />
        <br />
        <div className=' w-full h-full flex items-center justify-center my-4'>
        <textarea
        required
        value={message} 
        onChange={(e)=> setMessage(e.target.value)}
        className=' mx-2 Input-box self-center  text-start px-3 py-4 h-auto bg-transparent z-20 border border-[#7042f88b] opacity-[0.6] focus:outline-none'
        name="message" id="" cols={40} rows={5} placeholder='Your message'/>
        </div>
        Reach me out on <input 
        required
        type="email" 
        value = {email}
        id = 'email'
        placeholder='Your Email'
        className='mx-2 Input-box min-w-52 w-52  h-auto bg-transparent  z-20 border border-[#7042f88b] opacity-[0.6] focus:outline-none px-3 py-2'
        onChange={(e)=> setEmail(e.target.value)}
        />.
        <br />
        <div className=' flex justify-center items-center'>
        <button type='submit' className='z-[20] flex justify-center items-center px-4 mt-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] gap-2'>
          {msg}<HiMiniPaperAirplane className=' text-purple-500'/>
        </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
