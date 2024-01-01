import Image from 'next/image'
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' w-full bg-[#cef7fa] items-center justify-center flex text-center'>
        <div className=' max-w-4xl flex flex-col items-center justify-center'>
            <div className=' flex flex-col items-center justify-center gap-5 py-10'>
            <div className=' flex flex-col items-center justify-center gap-5'>
                <Image src='/crab.svg' width={100} height={100} alt='logo'/>
                <h1 className=' text-4xl'>Ceylon Crab Houses</h1>
                <p className=' text-sm w-[350px]'>Lot G1 Ground floor Bangsar Shopping Centre, Jalan Maarof, 59000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur,  Malaysia</p>
                <p className=' text-sm'>+94 77 123 4567</p>
                <p className=' text-sm'> Email : hello@ceyloncrabhouse.com</p>
            </div>

            <div className=' flex gap-8'>
                <FaInstagram />
                <FaSquareFacebook />
                <FaYoutube />
                <FaTiktok />
            </div>
        </div>
    </div>  

    </div>
  )
}

export default Footer