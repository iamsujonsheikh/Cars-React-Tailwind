import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full h-full md:h-screen bg-gray-700 px-4'>

        <main className='w-10/12 md:w-8/12 mx-auto py-[170px] md:py-20 flex-col justify-center items-center text-center'>

            <h1 className='text-3xl font-bold text-slate-400 border-b-4 inline border-cyan-600'>Contact</h1><br /><br />

            <input className='rounded py-1 px-2 w-full md:w-6/12' type="text" placeholder='Enter your name' /><br />

            <input className='rounded py-1 px-2 w-full md:w-6/12 my-2' type="email" placeholder='Enter your email' /><br />

            <textarea className='rounded py-1 px-2 w-full md:w-6/12' name="" id='' cols="30" rows="10" placeholder='Write your message'></textarea><br />

            <button className='border py-1 rounded px-4 font-semibold text-gray-300 bg-gray-800 hover:bg-opacity-50'>Let's Collaborate</button>
        </main>
       
    </section>
  )
}

export default Contact