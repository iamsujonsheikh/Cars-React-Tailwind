import React from 'react'
import second from '../asset/second.jpg'

const Speedy = () => {
  return (
    <section className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover relative' src={second} alt="" />

        <div className='absolute top-[20%] left-[45%]'>
            <h1 className='font-bold uppercase text-slate-500 text-4xl font-[poppins]'>Speed</h1>
        </div>
    </section>
  )
}

export default Speedy