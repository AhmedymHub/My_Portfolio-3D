import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../higherOrderComp';

import mee0 from "../assets/icons/mee0.png"
import ahmed from "../assets/icons/ahmed.jpeg"

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
      <p className={`${styles.sectionSubText}text-secondary`}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        About Me. </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)} 
      className="mt-4  text-violet-300 text-[17px] max-w-3xl leading-[30px]"
    >
       I'm skilled software developer with experience in both front-end and back-end development. I specialize in building dynamic, user-friendly applications using modern technologies and frameworks.<br className='sm:block hidden'/>
      I’m experienced in JavaScript and TypeScript, and I work with frameworks like React, Next.js, and Three.js to create engaging and responsive user interfaces.
    On the back end, I use Python, Java, SQL, and MongoDB to build scalable and efficient systems.
    Whether it’s crafting seamless user experiences or designing robust server-side solutions, I enjoy bringing ideas to life through code.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>

    <div className="mt-20 flex justify-center ">

          <div className="text-section">
          <h2 className={styles.sectionHeadText}>
            Who am I
          </h2>
          <p className={`${styles.sectionSubText} text-violet-300`}>
            Hello again, I'm Ahmed, a 23yr old passionate computer engineering student with experience in full-stack development, machine learning, and AI web applications. As a Software Developer, I build efficient applications. In Cybersecurity, I secure systems and data, and I'm currently taking the Google Cybersecurity Professional Certificate, which includes 9 courses. As a Data Analyst, I analyze data and apply machine learning for insights. I'm always eager to learn and expand my knowledge in technology. Feel free to explore my work below!"
          </p>
        </div>
        </div>
       <div className="mt-6 flex justify-center">
              <img
                src={ahmed}
                alt="Ahmed"
                className="w-[700px] h-[699px] object-contain rounded-full border-4 border-l-purple-600 border-r-amber-100"
              />
            </div>

              
    </>
  )
}

export default SectionWrapper(About, "about")
