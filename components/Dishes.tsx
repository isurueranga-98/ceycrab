import Image from 'next/image'
import React from 'react'

const Dishes = () => {
  return (
    <div>
        <div className=' hidden lg:flex items-center justify-end md:mx-5 md:my-5 text-start'>
            <div className=' flex-col flex gap-10'>
                <h1 className=' text-4xl font-bold underline'>Our Signature Dishes</h1>

                <div className=' flex-col flex gap-10'>
                    <div>
                        <h1 className=' text-2xl font-semibold text-[#cba135]'>Negombo Style Crab Curry</h1>
                        <p className=' text-sm text-[#cba135]'>Specially made with our secret aromatic and flavorful curry base for a creamy, golden curry experience you won’t find elsewhere. </p> 
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Black Pepper Crab</h1>
                        <p className=' text-sm'>Crushed black pepper curry with chopped capsicum and onions for a wild yet familiar flavour coating the crabs</p>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Jaffna Style Crab Curry</h1>
                        <p className=' text-sm'>A fiery, thick and dark curry bursting with a variety of spice flavours and aroma to accompany the sweet and fleshy crab meat.</p>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Signature Crab Sothi</h1>
                        <p className=' text-sm'>Crabs in yellow gravy made with coconut milk, turmeric, tamarind, moringa drumstick pieces and leaves.</p>
                    </div>
                </div>
            </div>
            <Image src='/Crab2.jpeg' width={500} height={500} alt='' className=' lg:w-[800px]'/>
        </div>




        <div className='lg:hidden my-5 mx-5'>

            <div>
                <h1 className=' text-4xl font-bold text-center underline'>Our Signature Dishes</h1>
            </div>

            <div>

                <div className=' flex flex-col-reverse  items-center justify-center md:flex-row'>
                    <div className=' text-center flex-col flex gap-4 md:text-start'>
                        <h1 className=' text-2xl font-semibold'>Negombo Style Crab Curry</h1>
                        <p className=' text-sm md:text-base'>Specially made with our secret aromatic and flavorful curry base for a creamy, golden curry experience you won’t find elsewhere. </p> 
                    </div>

                    <div>
                        <Image src='/Crab1.jpeg' width={500} height={500} alt='' className=' md:w-[800px]'/>
                    </div>

                    
                </div>
                <div className=' flex flex-col-reverse  items-center justify-center md:flex-row-reverse'>
                    <div className=' text-center flex-col flex gap-4 md:text-start'>
                        <h1 className=' text-2xl font-semibold'>Negombo Style Crab Curry</h1>
                        <p className=' text-sm md:text-base'>Specially made with our secret aromatic and flavorful curry base for a creamy, golden curry experience you won’t find elsewhere. </p> 
                    </div>

                    <div>
                        <Image src='/Crab2.jpeg' width={500} height={500} alt='' className=' md:w-[800px]'/>
                    </div>

                    
                </div>

                <div className=' flex flex-col-reverse  items-center justify-center md:flex-row'>
                    <div className=' text-center flex-col flex gap-4 md:text-start'>
                        <h1 className=' text-2xl font-semibold'>Negombo Style Crab Curry</h1>
                        <p className=' text-sm md:text-base'>Specially made with our secret aromatic and flavorful curry base for a creamy, golden curry experience you won’t find elsewhere. </p> 
                    </div>

                    <div>
                        <Image src='/Crab3.jpeg' width={500} height={500} alt='' className=' md:w-[800px]'/>
                    </div>
                    
                </div>

                <div className=' flex flex-col-reverse  items-center justify-center md:flex-row-reverse'>
                    <div className=' text-center flex-col flex gap-4 md:text-start'>
                        <h1 className=' text-2xl font-semibold'>Negombo Style Crab Curry</h1>
                        <p className=' text-sm md:text-base'>Specially made with our secret aromatic and flavorful curry base for a creamy, golden curry experience you won’t find elsewhere. </p> 
                    </div>

                    <div>
                        <Image src='/Crab4.jpeg' width={500} height={500} alt='' className=' md:w-[800px]'/>
                    </div>
                    
                </div>

                

                

                

            </div>

        </div>

    </div>
  )
}

export default Dishes