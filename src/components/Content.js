import React from 'react'
import imgone from '../images/img2.jpg';
import imgthree from '../images/img1.jpg';
function Content() {
    return (
        <>
        <div className='justify-center h-screen items-center flex flex-col py-10' >
           <img src={imgone} alt="egg" className='h-full rounded mb-20 shadow justify-center' /> 
           <div className='justify-center text-center '>
               <h1 className='text-2xl mb-2'>BOIL EGG</h1>
               <p className='mb-2 '>This is a delicious boil egg</p>
           </div>
        </div>
        <div className='justify-center h-screen items-center flex flex-col py-10' >
           <img src={imgthree} alt="egg" className='h-full rounded mb-20 shadow justify-center' /> 
           <div className='justify-center text-center '>
               <h1 className='text-2xl mb-2'>BOIL EGG</h1>
               <p className='mb-2 '>This is a delicious boil egg</p>
           </div>
        </div>
        </>
    )
}

export default Content
