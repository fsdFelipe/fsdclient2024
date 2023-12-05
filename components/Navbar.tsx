import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed left-0 top-0 w-full z-30'>
            <nav className='max-w-[1240px] m-auto flex justify-between items-center'>
                <Link href='/'>
                    <h1 className='font-bold text-4xl'>Captur</h1>
                </Link>
                <ul className='flex'>
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
            </nav>
        </div>
    )
}

export default Navbar