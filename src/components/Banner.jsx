import React from 'react'
import ReactTyped from 'react-typed'

export default function Banner() {
  return (
    <div id='top' className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl mb-5'>
              Learn with us
            </div>
            <h2 className='text-white md:text-[60px] text-3xl mb-9'>Grow With Us.</h2>
            <div className='md:text-[40px] text-xl text-white'>
                Learn 
                <ReactTyped
                className='pl-3'
                    strings={['web development', 'Graphic designing', 'Hacking', 'Digital Marketing']}
                    typeSpeed={80}
                    loop= {true}
                    backSpeed={50}
                />
            </div>
        <button className='bg-black text-white p-3 rounded-md mt-8' onClick={function(){alert('Hello this is Abu Bakar,s Site')}}>Get Started</button>
        </div>
    </div>
  )
}
