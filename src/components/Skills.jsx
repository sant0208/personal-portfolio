import React from 'react'
import { technologies } from '../constants'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 0.75)}
        className='w-40px green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-zinc-800 rounded-[20px] py-5 px-12 min-h-[50px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
);

const Skills = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-20'>
        {technologies.map((technologies, index) => (
        <ServiceCard key={technologies.title} index={index} {...technologies} />
        ))}
    </div>
  );
};

export default SectionWrapper(Skills, "education");