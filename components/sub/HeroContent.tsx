'use client';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function HeroContent(){
return (
    <motion.div
        className=" flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        initial='hidden'
        animate='visible'
        >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/> 
                <h1 className='Welcome-text  text-[12px] '>Aryan Sharma</h1>         
            </motion.div>
            
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[500px] w-auto h-auto  lg:max-w-[600px]'
            ><span>

            Crafting <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                Excellence   
                </span> in Web Development 
            </span>
            </motion.div>
            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-4 max-w-[600px]'
            >
                Embarking on Full Stack Development: Discover My Evolving Skills & Projects!
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            href='#skills'
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
            >
                Learn More
            </motion.a>
            
        </div>
        <motion.div 
            variants={slideInFromRight(0.8)}
            className='w-full flex justify-center items-center'
            >
                <Image src="/mainIconsdark.svg" 
                alt='work icons'
                height={650}
                width={650}
                />
            </motion.div>
    </motion.div>
)
}
