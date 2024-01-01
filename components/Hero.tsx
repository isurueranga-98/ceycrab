import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { PiChairFill } from "react-icons/pi";

const Hero = () => {
  return (
    // <div className=' '>
        
    //     <div className=' w-full absolute flex justify-center items-center'>
    //         <div className='absolute w-full h-full bg-black opacity-70'></div>
    //             <Image src='/Crab6.jpeg' layout='responsive' objectFit='cover' width={1000} height={1000}  alt='hero image' className=' bg-black opacity-100'/>
    //         </div>
    
    //         <div className=' mt-36 relative items-center justify-center text-center'>
    //             <div className=' flex flex-col items-center justify-center text-white gap-5'>
    //                 <h1 className=' text-4xl lg:text-5xl font-bold text-white'>Ceylon Crab</h1>
    //                 <p className=' w-[400px] sm:w-[600px] md:w-[700px] lg:w-[800px] lg:text-base xl:w-[900px] xl:text-lg text-sm text-white'>At Ceylon Crab house we serve you the finest Sri Lankan cuisine with the world renowned hospitality giving you the best dining experience you deserve. Our speciality is Crab, experience a gastronomic feast of crab dishes prepared using the finest Sri Lankan species and recipes.</p>
    //             </div>
    //         </div>

    //         <div className='relative'>
    //             <div className=' flex flex-col items-center justify-center mt-10'>
                    
    //             </div>
    //         </div>
    // </div>

    <div className=' flex-col flex justify-center items-center'>

        <div className='  w-full flex-col flex justify-center items-center'>
            <div className=' w-full mt-20'>
                {/* <div className=' w-full absolute flex justify-center items-center'>
                    <div className='absolute w-full h-full bg-black opacity-70'></div>
                        <Image src='/Crab6.jpeg' layout='responsive' objectFit='cover' width={1000} height={1000}  alt='hero image' className=' bg-black opacity-100'/>
                    </div> */}
                    <Image src='/Crab6.jpeg' layout='responsive' objectFit='cover' width={1000} height={1000}  alt='hero image' className=''/>
            </div>
            
            <div className=' py-10 w-full flex-col flex justify-center items-center bg-[#cef7fa]'>
                {/* <div className=' absolute'>
                    <Image src='/https___83563132bdd28a1e0fd2b4d3a1659d88.cdn.bubble.io_f1655446937282x114214896299462020_BG.jpeg' layout='responsive' objectFit=' ' width={1000} height={1000}  alt='hero image' />
                </div> */}
                <div className=' flex flex-col  items-center justify-center'>
                    <div className=' flex flex-col items-center justify-center text-black gap-10 text-center'>
                        <p className=' underline'>CRAB CEYLONE</p>
                        <h1 className=' text-4xl lg:text-5xl font-normal'>A Delicious Adventure</h1>
                        <p className=' w-[400px] sm:w-[600px] md:w-[700px] lg:w-[800px] lg:text-base xl:w-[900px] xl:text-lg text-sm font-light  '>At Ceylon Crab house we serve you the finest Sri Lankan cuisine with the world renowned hospitality giving you the best dining experience you deserve. Our speciality is Crab, experience a gastronomic feast of crab dishes prepared using the finest Sri Lankan species and recipes.</p>
                    </div>
                </div>

                <div className=' mt-10 flex items-center justify-center gap-10'>

                    <div className=' gap-2 mt-5 flex items-center justify-center flex-row  bg-[#cba135] text-center w-[130px] h-[40px] lg:w-[130px] lg:h-[50px] rounded-xl'>
                        <PiChairFill style={{ color: '#ffffff' }} />
                        <Link href='/' className=' text-sm font-medium lg:text-base items-center justify-center text-white' >Reservation</Link>
                    </div>

                    <div className=' gap-2 mt-5 flex items-center justify-center flex-row  bg-[#cba135] text-center w-[130px] h-[40px] lg:w-[130px] lg:h-[50px] rounded-xl'>
                        <FaBookOpen style={{ color: '#ffffff' }} />
                        <Link href='/' className=' text-sm font-medium lg:text-base items-center justify-center text-white'>Menu Items</Link>
                    </div>

                </div>

                {/* <div className=' flex gap-5 mt-10'>
                    <Image src='/img1.jpeg' width={500} height={500} alt='img' className=' rounded-xl shadow-xl'/>
                    <Image src='/img1.jpeg' width={500} height={500} alt='img' className=' rounded-xl shadow-xl'/>
                    <Image src='/img1.jpeg' width={500} height={500} alt='img' className=' rounded-xl shadow-xl'/>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default Hero

