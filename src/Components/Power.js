import React from 'react'
import first from '../asset/first.jpg'

const Power = () => {
  return (
    <section className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover relative' src={first} alt="" />

        <div className='absolute top-[20%]'>
            <h1 className='font-bold uppercase text-slate-500 text-4xl font-[poppins]'>Power</h1>
        </div>

        {/* fixed option */}
        <div className='absolute w-10/12 mx-auto bg-gray-300'>

            <button className=''>Sign In</button>
            <button className=''>Sign Up</button>

        </div>
    </section>
  )
}

export default Power