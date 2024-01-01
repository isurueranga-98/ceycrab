import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=' flex flex-col w-full h-20 bg-[#80b7bb] items-center justify-center  backdrop-blur-[0.5rem] shadow-lg fixed z-10'>

      <div className=' md:hidden flex flex-col items-center justify-center'>

        <div className=' '>
            <Image src='/crab.svg' width={50} height={50} alt='logo' className=' w-8 h-8'/>
        </div>

        <div className='flex gap-5 font-medium text-md text-white '>
            <Link href="/">Home</Link>
            <Link href="/">Menu</Link>
            <Link href="/">Experience</Link>
            <Link href="/">Reservation</Link>
        </div>
      </div>

        <div className=' hidden md:flex md:gap-24 md:justify-center md:items-center'>

          <div className='   gap-10 text-white md:flex md:font-normal md:text-lg' >
              <Link href="/">Home</Link>
              <Link href="/">Experience</Link>

          </div>

          <div className='  lg:flex'>
              <Image src='/crab.svg' width={50} height={50} alt='logo' className=' w-14 h-14'/>
          </div>

          <div className='   gap-10 text-white md:flex md:font-normal md:text-lg' >
              <Link href="/">Menu</Link>
              <Link href="/">Reservation</Link>
          </div>
        </div>
    </header>
  )
}

export default Header