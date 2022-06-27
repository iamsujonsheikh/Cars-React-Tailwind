import React, { useState } from 'react'
import { VscAccount } from 'react-icons/vsc';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineMenuUnfold,AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'



const Navbar = () => {
    // declear useState
    const [open, setOpen] = useState(false)

    // create a function open nav
    const handleNavOpen = () => {
        setOpen(!open)
    }

    // create a function close mobile nav
    const handleNavClose = () => {
        setOpen(!open)
    }
  return (
    <section  className='fixed z-10 w-full flex justify-between items-center px-4 h-14'>
             {/* logo section */}
        <div className='text-3xl font-bold text-blue-400 cursor-pointer'>
            Cars.
        </div>

         {/* navigation section */}
         <ul className='hidden md:flex space-x-6 font-medium uppercase text-slate-200'>

            <li className='cursor-pointer'>
            <Link to="power" spy={true} smooth={true} offset={-0} duration={500}>Power</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="speed" spy={true} smooth={true} offset={-0} duration={500}>Speed</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="handle" spy={true} smooth={true} offset={-0} duration={500}>Handling</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="option" spy={true} smooth={true} offset={-0} duration={500}>Options</Link>
            </li>

            <li className='cursor-pointer'>
            <Link to="contact" spy={true} smooth={true} offset={-0} duration={500}>Contact</Link>
            </li>

            {/* <li className='cursor-pointer'>speed</li>
            <li className='cursor-pointer'>Handling</li>
            <li className='cursor-pointer'>Options</li>
            <li className='cursor-pointer'>Contact</li> */}
        </ul>

        {/* nab section */}
        <ul className='hidden md:flex space-x-4 font-medium uppercase'>
            <li><VscAccount className='text-gray-300 cursor-pointer hover:text-gray-200 duration-300 hover:scale-110' size={25}/></li>

            <li><FiShoppingBag className='text-gray-300 cursor-pointer hover:text-gray-200 duration-300 hover:scale-110' size={25}/></li>
        </ul>


        {/* icon section */}
        <ul className='md:hidden cursor-pointer' onClick={handleNavOpen}>
            {
            (!open) ? <AiOutlineMenuUnfold className='text-slate-100' size={25}/> : <AiOutlineClose className='text-slate-100' size={25}/>
            }

        {/* mobile device navbar section */}
        <div className={(!open) ? 'hidden' : 'absolute left-0 top-12 w-full bg-slate-700 bg-opacity-30 px-10 uppercase font-medium flex-col text-white text-center'}>

            {/* <li className='cursor-pointer border-b-2 border-slate-300 py-2 hover:bg-slate-500 hover:text-teal-100 duration-300 rounded'>
            <Link onClick={handleNavClose} to="power" spy={true} smooth={true} offset={-50} duration={500}>Power</Link>
            </li> */}

            <Link onClick={handleNavClose} to="power" spy={true} smooth={true} offset={-50} duration={500}><li className='cursor-pointer border-b-2 border-slate-300 py-2 hover:bg-slate-500 hover:text-teal-100 duration-300 rounded'>Power</li></Link>

            <Link onClick={handleNavClose} to="speed" spy={true} smooth={true} offset={-0} duration={500}><li className='cursor-pointer border-b-2 border-slate-300 py-2 hover:bg-slate-500 hover:text-teal-100 duration-300 rounded'>Speed</li></Link>

            <Link onClick={handleNavClose} to="handle" spy={true} smooth={true} offset={-0} duration={500}><li className='cursor-pointer border-b-2 border-slate-300 py-2 hover:bg-slate-500 hover:text-teal-100 duration-300 rounded'>Handling</li></Link>

            <Link onClick={handleNavClose} to="option" spy={true} smooth={true} offset={-0} duration={500}><li className='cursor-pointer border-b-2 border-slate-300 py-2 hover:bg-slate-500 hover:text-teal-100 duration-300 rounded'>Option</li></Link>

            <Link onClick={handleNavClose} to="contact" spy={true} smooth={true} offset={100} duration={500}><li className='cursor-pointer border-b-2 border-slate-300 py-2 hover:bg-slate-500 hover:text-teal-100 duration-300 rounded'>Contact</li></Link>

            {/*  */}
            <button className='w-full border rounded-full py-2 duration-300 hover:text-slate-300 mt-6 text-red-300 bg-gray-700 bg-opacity-50 uppercase hover:bg-slate-500'>Sign In</button>

            <br />

            <button className='w-full border rounded-full py-2 duration-300 hover:text-slate-300 my-3 text-red-300 bg-gray-700 bg-opacity-50 uppercase hover:bg-slate-500'>Sign up</button>


            {/* icon section  */}
            <ul className='flex justify-center space-x-6 my-4 cursor-pointer'>

            <li><VscAccount className='text-green-400 hover:text-gray-900 hover:scale-125 duration-300' size={25}/></li>
            <li><FiShoppingBag className='text-pink-400 hover:text-gray-900 hover:scale-125 duration-300' size={25}/></li>
        </ul>

        </div>
            
        </ul>

         {/* fixed option */}
        {/* <div className='hidden absolute top-[800%] right-[25%] left-[25%] space-x-4 md:flex justify-center'>

            <button className='border rounded-full bg-gray-500 bg-opacity-30 p-1 font-semibold text-gray-300 text-lg w-full hover:bg-opacity-50'>RIDE</button>

            <button className='border rounded-full bg-gray-500 bg-opacity-30 p-1 font-semibold text-gray-300 text-lg w-full hover:bg-opacity-50'>DRIVE</button>

        </div> */}

    </section>
  )
}

export default Navbar