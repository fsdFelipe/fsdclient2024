import React from 'react'

const Hero = () => {
    return (
        <section className='w-full bg-blue-300 items-center mt-12 justify-center p-12'>
            <div className='w-full flex items-center justify-center text-white min-h-screen border-[1px] border-red-500'>
                <div className='w-1/2 h-[500px] border-[1px] border-emerald-400'>div 1</div>
                <div className='w-1/2 h-[500px] border-[1px] border-yellow-400'>div 1</div>
            </div>
        </section>
    )
}

export default Hero