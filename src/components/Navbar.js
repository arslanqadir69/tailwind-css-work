import React from 'react';
import logoimg from'../images/logo.jpg';
import {Link} from 'react-router-dom'
 function Navbar() {
    return (
      <nav className='flex justify-around items-stretch   relative font-mono bg-blue-600  h-16 py-5 '>
       <Link to='/' className='pl-4 text-xl'>
         <img src={logoimg} alt="logo"/>
       Egg
       </Link>
       <div className='px-4 curser-pointer md:hidden'>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 
  2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
       </div>
     
    <div className=' pr-8 md:block hidden '>
     <Link to='/' className='p-4 '>Home</Link>
     <Link to='/' className='p-4 '>About</Link>
     <Link to='/' className='p-4 '>Contact</Link>
     <Link to='/' className='p-4 '>Service</Link>
    </div>
      </nav>
    )
}
export default Navbar;