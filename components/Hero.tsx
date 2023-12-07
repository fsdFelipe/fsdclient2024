'use client'
import React from 'react'
import {
    FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,
    FaYoutube, FaKickstarter, FaGithubSquare
} from "react-icons/fa";
import { motion } from 'framer-motion'
import AnimatedTitle from './animations/AnimatedTitle';
import Link from 'next/link';
import DrawImg from './animations/DrawImg';

const Hero: React.FC = () => {
    return (
        <section className='w-full bg-blue-300 min-h-[40vh] items-center justify-center'>
            <div className='w-full lg:flex items-center justify-center text-white p-8'>
                <div className='w-full flex-col h-full p-0 sm:p-8 lg:w-1/2 items-center justify-center'>
                    <div className='text-white'>
                        <AnimatedTitle text="Bem Vindo !!!" />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{
                                scale: [1, 1.1, 1], opacity: 1,
                                transition: {
                                    duration: 0.6,
                                },
                            }
                            }
                            className='py-5 text-xl'
                        >Conheça minha caminhada para ser um desenvolvedor web
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{
                                scale: [1, 1.1, 1], opacity: 1,
                                transition: {
                                    duration: 0.6,
                                    delay: 0.7
                                },
                            }
                            }
                            className='px-8 py-2 my-4 border hover:border-red-600'>
                            <Link href='pages/contato'>Contato</Link>
                        </motion.button>
                    </div>
                    <div className='w-full lg:w-4/5 hidden lg:flex items-center justify-between p-0 sm:p-8'>
                        <motion.a
                            href='https://www.facebook.com/profile.php?id=61553821538443'
                            target={'_blank'}
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaFacebookSquare className='w-9 h-9 text-blue-500' />
                        </motion.a>
                        <motion.a
                            href='https://www.instagram.com/kodd07/'
                            target={'_blank'}
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaInstagramSquare className='w-9 h-9 text-red-300' />
                        </motion.a>
                        <motion.a
                            href='/'
                            target={'_blank'}
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTwitterSquare className='w-9 h-9 text-blue-800' />
                        </motion.a>
                        <motion.a
                            href='https://www.youtube.com/@meucaminhodev'
                            target={'_blank'}
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaYoutube className='w-9 h-9 text-red-500' />
                        </motion.a>
                        <motion.a
                            href='https://kick.com/tchiu'
                            target={'_blank'}
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaKickstarter className='w-9 h-9 text-green-500' />
                        </motion.a>
                        <motion.a
                            href='https://github.com/fsdFelipe'
                            target={'_blank'}
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithubSquare className='w-9 h-9 text-black' />
                        </motion.a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex items-start justify-center lg:justify-end'>
                    <DrawImg />
                </div>
            </div>
        </section>
    )
}

export default Hero