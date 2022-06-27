import React from 'react'
import fourth from '../asset/fourth.jpg'
import Typed from 'react-typed';


const Option = () => {
  return (
    <section name='option' className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover relative' src={fourth} alt="" />

        <div className='absolute top-[20%] right-[50%] left-[50%] flex justify-center'>
        <Typed
        className='font-bold uppercase text-red-300 text-4xl font-[poppins]'
                    strings={['WOOOOO']}
                    typeSpeed={70}
                    backSpeed={70}
                    loop
        />
        </div>
    </section>
  )
}

export default Option