import React from 'react'
import { TbBrandVscode } from "react-icons/tb";
import { SiAnaconda } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import { motion } from "framer-motion"

const iconVariants = (duration)=>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }


    }
})

const Tools = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Tools</motion.h1>
      <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandVscode className='text-7xl text-cyan-600'/>
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl text-orange-800'/>
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiJira className='text-7xl text-blue-600'/>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPycharm className='text-7xl text-white'/>
        </motion.div>

        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostman className='text-7xl text-orange-700'/>
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAnaconda className='text-7xl text-green-600'/>
        </motion.div>

        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiGooglecolab className='text-7xl text-orange-600'/>
        </motion.div>
        

      </motion.div>
    </div>
  )
}

export default Tools
