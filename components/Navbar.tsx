'use client'
import { LOGOF } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed left-0 top-0 w-full z-30 easy-in duration-300 bg-gray-800/70'>
            <nav className='flex m-auto justify-between items-center py-4 xl:px-32 px-6 text-white'>
                <Link href='/' className='flex items-center justify-center z-10'>
                    <Image src={LOGOF} alt='Felipe' width={35} height={10} />
                    <h3 className='-ml-3.5 mt-1'>elipe</h3>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4 font-bold hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 font-bold hover:text-gray-500'>
                        <Link href='/sobre'>Sobre</Link>
                    </li>
                    <li className='p-4 font-bold hover:text-gray-500'>
                        <Link href='/#videos'>Tutoriais</Link>
                    </li>
                    <li className='p-4 font-bold hover:text-gray-500'>
                        <Link href='/work'>Portifolio</Link>
                    </li>
                    <li className='p-4 font-bold hover:text-gray-500'>
                        <Link href='/contact'>Contato</Link>
                    </li>
                </ul>

                {/** Botão Mobile */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>

                {/** Menu Mobile */}
                <div className={
                    nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                }>
                    <ul>
                        <li className='p-4 font-bold hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-4 font-bold hover:text-gray-500'>
                            <Link href='/sobre'>Sobre</Link>
                        </li>
                        <li className='p-4 font-bold hover:text-gray-500'>
                            <Link href='/#videos'>Tutoriais</Link>
                        </li>
                        <li className='p-4 font-bold hover:text-gray-500'>
                            <Link href='/work'>Portifolio</Link>
                        </li>
                        <li className='p-4 font-bold hover:text-gray-500'>
                            <Link href='/contact'>Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar