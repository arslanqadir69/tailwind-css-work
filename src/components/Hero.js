import React from 'react'
import {Link} from 'react-router-dom'
function Hero() {
    return (
        <div className='rounded  bg-gray-900'>
        <div className='justify-center bg-white h-screen flex items-center  flex-col '>
            <div className=' border-solid animate-ping rounded-xl  outline-black'>
            {/* <Link className='animate-none  an'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
</svg></Link> */}
</div>
            <h1 className='xl:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14' >Mongo</h1>
            <Link className='py-7 px-5 bg-yellow-200 rounded-full text-3xl hover:bg-yellow-700 
            animate-bounce transition-douration-300 flex items-center'>
                Order Now
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
              fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 
  11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 
  1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg></Link>
        </div>
        </div>
    )
}

export default Hero
