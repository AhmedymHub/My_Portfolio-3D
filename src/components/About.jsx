import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../higherOrderComp';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        About Me. </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)} 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
       a skilled software developer with experience in both front-end and back-end development. I specialize in building dynamic, user-friendly applications using modern technologies and frameworks.
       What I Do:
       <br className='sm:block hidden'/>

    I’m experienced in TypeScript and JavaScript, and I work with frameworks like React, Next.js, and Three.js to create engaging and responsive user interfaces.
    On the back end, I use Python, Java, SQL, and MongoDB to build scalable and efficient systems.
    Whether it’s crafting seamless user experiences or designing robust server-side solutions, I enjoy bringing ideas to life through code.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")