import React from 'react'
import second from '../asset/second.jpg'
import Typed from 'react-typed';


const Speedy = () => {
  return (
    <section name='speed' className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover' src={second} alt="" />

        <div className='absolute top-[20%] right-[50%] left-[50%] flex justify-center'>
        <Typed
        className='font-bold uppercase text-green-500 text-4xl font-[poppins]'
                    strings={['Energy']}
                    typeSpeed={70}
                    backSpeed={70}
                    loop
        />
        </div>

        {/* fixed option */}
         <div className='hidden absolute top-[80%] right-[25%] left-[25%] space-x-4 md:flex justify-center'>

            <button className='border rounded-full bg-gray-500 bg-opacity-30 p-1 font-semibold text-gray-300 text-lg w-full hover:bg-opacity-50'>RIDE</button>

            <button className='border rounded-full bg-gray-500 bg-opacity-30 p-1 font-semibold text-gray-300 text-lg w-full hover:bg-opacity-50'>DRIVE</button>

        </div>
    </section>
  )
}

export default Speedy