import { LOGOF } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    return (
        <div className='fixed left-0 top-0 w-full z-30 easy-in duration-300'>
            <nav className='flex justify-between items-center xl:px-32 px-6 text-white'>
                <Link href='/' className='p-4 flex items-center justify-center z-10'>
                    <Image src={LOGOF} alt='Felipe' width={35} height={10} />
                    <h3 className='-ml-3.5 mt-1 sm:text-black'>elipe</h3>
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
                <div className='block sm:hidden z-10'>
                    <AiOutlineMenu size={20} />
                </div>

                {/** Menu Mobile */}
                <div className='sm:hidden absolute left-0 right-0 top-0 bottom-0 w-full flex items-center justify-center h-screen bg-black text-center easy-in duration-300'>
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