import Image from 'next/image'
import React from 'react'

const Images = () => {
  return (
    // <div className=' py-10 bg-[#cef7fa] items-center justify-center flex flex-col gap-10 '>
    //     <div className=' text-center font-semibold text-xl'>
    //         <h1>Our Facilities</h1>
    //     </div>

    //     <div className=' mx-5 bg-[#00394d] flex flex-col gap-5 md:flex-row'>
    //         <div>
    //             <Image layout='responsive' objectFit='cover' src='/img2.jpeg' width={100} height={100} alt='img2' />
    //         </div>

    //         <div className=' pb-5 px-3 flex flex-col gap-4 md:pt-5'>
    //             <h1 className=' text-3xl text-white'>Tables</h1>
    //             <p className=' text-white font-light w-full'>A highly personalised experience created to encourage unhindered culinary exploration. Ideal for groups of 12 friends, family or business colleagues this one-of-a-kind experience is tailored to your tastes—from concepts to menus, ambiance and beyond.</p>
    //             <p className=' text-white font-light'>Offered at an additional cost</p>
    //         </div>
    //     </div>

    //     <div className=' mx-5 bg-[#00394d] flex flex-col gap-5 md:flex-row'>
    //         <div>
    //             <Image layout='responsive' src='/img2.jpeg' width={500} height={500} alt='img2'/>
    //         </div>

    //         <div className=' pb-5 px-3 flex flex-col gap-4 md:pt-5'>
    //             <h1 className=' text-3xl text-white'>Tables</h1>
    //             <p className=' text-white font-light w-full'>A highly personalised experience created to encourage unhindered culinary exploration. Ideal for groups of 12 friends, family or business colleagues this one-of-a-kind experience is tailored to your tastes—from concepts to menus, ambiance and beyond.</p>
    //             <p className=' text-white font-light'>Offered at an additional cost</p>
    //         </div>
    //     </div>
        
    // </div>
    <div className=' px-1 mx-0 py-10 items-center justify-center flex flex-col'>

        <div className=' text-center gap-5 flex flex-col'>
            <h1 className=' text-4xl font-bold underline'>Our Facilities</h1>
            <p className=' max-w-6xl px-4 text-sm'>A highly personalised experience created to encourage unhindered culinary exploration. Ideal for groups of 12 friends, family or business colleagues this one of a kind experience is tailored to your tastes from concepts to menus, ambiance and beyond.</p>
        </div>

            <div className=' max-w-7xl  mx-auto py-10 flex flex-col'>
                <div className=' h-[300px] relative grid grid-cols-2 bg-[#00394d]'>
                    <div className=' relative'>
                        <Image src='/img2.jpeg' layout='fill' objectFit='cover'  alt='img2' />
                    </div>
                    <div className=' text-start px-2 lg:px-10 justify-center flex-col flex gap-5 text-white'>
                        <h1 className=' text-xl font-bold lg:text-3xl lg:font-semibold'>Tables</h1>
                        <p className=' text-sm font-extralight'>A highly personalised experience created to encourage unhindered culinary exploration. Ideal for groups of 12 friends, family or business colleagues this one of a kind experience is tailored to your tastes from concepts to menus, ambiance and beyond.</p>
                        
                    </div>
                </div>
                <div className=' h-[300px] relative grid grid-cols-2 bg-[#00394d]'>
                    
                    <div className=' text-start px-2 lg:px-10  justify-center flex-col flex gap-5 text-white'>
                        <h1 className=' text-xl font-bold lg:text-3xl lg:font-semibold '>Dining</h1>
                        <p className=' text-sm font-extralight'>An intimate way to celebrate special occasions or simply spend some quality or romantic time together. Enjoy dinner in our Bubble on the Beach or a secluded table for two with your own customised menu</p>
                        
                    </div>

                    <div className=' relative'>
                        <Image src='/img1.jpeg' layout='fill' objectFit='cover'  alt='img2' />
                    </div>
                </div>

                <div className=' h-[300px] relative grid grid-cols-2 bg-[#00394d]'>
                    <div className=' relative'>
                        <Image src='/img3.jpeg' layout='fill' objectFit='cover'  alt='img2' />
                    </div>
                    <div className=' text-start px-2 lg:px-10 justify-center flex-col flex gap-5 text-white'>
                        <h1 className=' text-xl font-bold lg:text-3xl lg:font-semibold'>Outdor</h1>
                        <p className=' text-sm font-extralight'>A highly personalised experience created to encourage unhindered culinary exploration. Ideal for groups of 12 friends, family or business colleagues this one of a kind experience is tailored to your tastes from concepts to menus, ambiance and beyond.</p>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Images