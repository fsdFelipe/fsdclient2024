'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTitleProps {
    text: string;
}

const texto = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const letra = {
    initial: {
        opacity: 0,
        scale: 1, // Add initial scale value
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: [1, 1.2, 0.8, 1.1, 1], // Add an array of scale values for bounce effect
        transition: {
            duration: 1,
        },
    },
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
    return (
        <div className='w-full mx-auto flex items-center justify-center overflow-hidden'>
            <motion.h1
                className='inline-block w-full text-slate-700 font-extrabold text-lg md:text-2xl lg:text-3xl'
                variants={texto}
                initial='initial'
                animate='animate'
            >
                {text.split('').map((word, index) => (
                    <motion.span key={word + '-' + index}
                        className='inline-block hover:text-emerald-400'
                        variants={letra}
                        whileHover={{
                            scale: [1, 1.3, 1],
                            transition: {
                                duration: 0.6,
                            },
                        }
                        }>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedTitle;