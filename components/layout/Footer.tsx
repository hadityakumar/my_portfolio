'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=' py-10 px-6'>
      <div className='flex flex-col items-center gap-6'>

        {/* Logo */}
        <Image 
          src='/aditya_logo.png'
          alt='Shaheen logo'
          width={200}
          height={200}
        />

        {/* Info */}
        <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-center sm:text-left'>
          <a href='/'><p className="text-lg font-medium">H Aditya Kumar</p></a>
          <h2
              className="relative text-lg cursor-pointer 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-[#F2F2F2] after:transition-all after:duration-300 
              hover:after:w-full"
              onClick={() => {
                navigator.clipboard.writeText("hadityakumar@gmail.com");
              }}
            >
              hadityakumar@gmail.com
            </h2>
          <p className='text-lg italic'>Software Developer</p>
        </div>

        {/* Copyright */}
        <p className='text-sm text-gray-400 mt-4'>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

