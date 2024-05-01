import React from 'react'
import { Spot } from './Spot';

const Hero = () => {
  return (
    <section className='relative w-full h-screen  bg-black drop-shadow-xl text-white flex  items-center justify-center leading-10 scroll-container'>
      <Spot className='sm:block hidden'/>
      <div className=' text-white font-serif text-center flex justify-center align-center  text-4xl sm:text-6xl'>
        <p>Hel!<br/>I'm <span className='glowing-txt'>G</span> C<br/><span className='glowing-txt'>S</span>ant<span className='glowing-txt'>h</span>osh<br/><span className='text-[10px] sm:text-xs gap-2'>F<span className='glowing-txt'>U</span>LLSTACK <span className='glowing-txt'>DEVELOPER</span></span></p>
      </div>
      <a href="https://github.com/sant0208" className="absolute bottom-20 item-center sm:bottom-10"><button
            type="button"
            className="inline-block rounded-full border-2 border-primary-800 px-6 pb-[6px] pt-2 text-xm font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            G<span className='glowing-txt'>I</span>THUB
      </button></a>
    </section>
  )
}

export default Hero
