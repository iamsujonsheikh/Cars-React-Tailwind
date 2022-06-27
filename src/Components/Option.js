import React from 'react'
import fourth from '../asset/fourth.jpg'

const Option = () => {
  return (
    <section className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover relative' src={fourth} alt="" />

        <div className='absolute top-[20%] left-[45%]'>
            <h1 className='font-bold uppercase text-slate-500 text-4xl font-[poppins]'>Power</h1>
        </div>
    </section>
  )
}

export default Option