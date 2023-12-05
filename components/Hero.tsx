import Image from 'next/image'
import React from 'react'
import {
    FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,
    FaYoutube, FaKickstarter, FaGithubSquare
} from "react-icons/fa";

const Hero = () => {
    return (
        <section className='w-full bg-blue-300 min-h-screen mt-16 lg:mt-0 items-center justify-center lg:p-12'>
            <div className='w-full lg:flex items-center justify-center text-white border-[1px] border-red-500'>
                <div className='w-full flex-col lg:w-1/2 p-8 items-center justify-center border-[1px] border-emerald-400'>
                    <div className='p-5 text-white'>
                        <h2 className='text-4xl sm:text-5xl font-bold'>Bem Vindo !!!</h2>
                        <p className='py-5 text-xl'>Conheça minha caminhada para ser um desenvolvedor web</p>
                        <button className='px-8 py-2 border'>Book</button>
                    </div>
                    <div className='w-full hidden md:flex items-center justify-between p-6'>
                        <FaFacebookSquare className='w-9 h-9' />
                        <FaInstagramSquare className='w-9 h-9' />
                        <FaTwitterSquare className='w-9 h-9' />
                        <FaYoutube className='w-9 h-9' />
                        <FaKickstarter className='w-9 h-9' />
                        <FaGithubSquare className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center border-[1px] border-yellow-400 p-8'>
                    <Image src='/images/Logo.png'
                        alt='Felipe Dias'
                        width={520}
                        height={460} />
                </div>
            </div>
        </section>
    )
}

export default Hero