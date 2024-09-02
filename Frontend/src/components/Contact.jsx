import React from 'react';
import Navbar from './Navbar';


function Contact() {
  return (
   <>
  <div><Navbar/>
   <div className='flex h-screen items-center justify-center'>
    <form method="dialog">
       <div  className='mt-4 space-y-2' >
       <span className='text-4xl font-bold py-6 mb-4'>Contact Us</span><br/>
        <span className='text-md '>Name</span><br/>
        <input type='text'placeholder='Enter your name 'className='w-[600px] h-[50px] px-3 border rounded-md outline-none'/><br/>
        <span className='text-md '>Email</span><br/>
        <input type='text'placeholder='Enter your email 'className='w-[600px] h-[50px] px-3 border rounded-md outline-none'/><br/>
        <span className='text-md '>Message</span><br/>
        
        <input type='text'placeholder='Type your message 'className='w-[600px] h-[70px] px-3 border rounded-md outline-none'/><br/>
        <div className='flex justify-items-start mt-4'>
        <button className='bg-blue-700 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200
        '>SignUp</button>
        </div>
       </div>
    </form>
   </div>
   </div>
   </>
  )
}

export default Contact

