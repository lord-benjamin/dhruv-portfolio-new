import React, { useEffect } from 'react';

const Landing = () => {
  return (
    <div className='h-screen w-full relative flex justify-center items-center'>
      <div className='absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
        <div className='h-screen lg:h-[600px] w-screen lg:w-[800px] bg-gradient-to-r from-dark-red to-light-red blur-[180px] lg:blur-[250px] shadow-2xl rounded-full opacity-65 object-cover'></div>
      </div>
      <div className='text-center w-full'>
        <h4 className='text-3xl md:text-4xl text-orange font-acme mb-3 md:mb-2'>
          Hey, I&apos;m
        </h4>
        <h1 className='text-6xl lg:text-[90px] font-rowdies uppercase name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] relative overflow-hidden italic'>
          <span className='gap-8 lg:gap-12 flex animate-horizontalMarqueeLeft3 md:animate-horizontalMarqueeLeft w-max'>
            <span>&nbsp;&nbsp;Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
          </span>
          <span className='absolute top-0 gap-8 lg:gap-12 flex animate-horizontalMarqueeLeft4 md:animate-horizontalMarqueeLeft2 w-max'>
            <span>&nbsp;&nbsp;Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
          </span>
        </h1>
        <h1 className='my-4 md:my-0 md:overflow-x-hidden flex justify-center h-max md:h-[88px] lg:h-[136px] items-center'>
          <span className='flex w-max gap-12 h-full items-center text-6xl lg:text-[90px] font-rowdies uppercase'>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='text-coke dark:text-white [text-shadow:_0_10px_10px_white] dark:[text-shadow:_0_10px_10px_#22092C] lg:[text-shadow:_0_20px_20px_white] lg:dark:[text-shadow:_0_20px_20px_#22092C] md:w-max'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
            <span className='hidden md:block name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] w-max italic'>
              Dhruv Arora
            </span>
          </span>
        </h1>
        <h1 className='text-6xl lg:text-[90px] font-rowdies uppercase mb-3 name [-webkit-text-stroke-color:_#22092C] dark:[-webkit-text-stroke-color:_white] relative overflow-hidden italic'>
          <span className='gap-8 lg:gap-12 flex animate-horizontalMarqueeRight3 md:animate-horizontalMarqueeRight w-max'>
            <span>&nbsp;&nbsp;Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
          </span>
          <span className='absolute top-0 gap-8 lg:gap-12 flex animate-horizontalMarqueeRight4 md:animate-horizontalMarqueeRight2 w-max'>
            <span>&nbsp;&nbsp;Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
            <span>Dhruv Arora</span>
          </span>
        </h1>
        <h2 className='h-[50px] relative overflow-y-hidden text-center'>
          <span className='text-2xl md:text-4xl text-orange font-acme gap-5 flex flex-col animate-verticalMarquee3 md:animate-verticalMarquee'>
            <span className='h-px'></span>
            <span>Web Developer</span>
            <span>Curious Learner</span>
            <span>Competitive Programmer</span>
            <span>Tech Enthusiast</span>
            <span>Open Source Contributor</span>
          </span>
          <span className='text-2xl md:text-4xl absolute left-0 right-0 top-5 text-orange font-acme flex flex-col gap-5 animate-verticalMarquee4 md:animate-verticalMarquee2'>
            <span>Web Developer</span>
            <span>Curious Learner</span>
            <span>Competitive Programmer</span>
            <span>Tech Enthusiast</span>
            <span>Open Source Contributor</span>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Landing;
