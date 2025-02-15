import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../higherOrderComp';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import mee0 from "../assets/icons/mee0.png"
import boss from "../assets/icons/boss.png"
import mee2 from "../assets/icons/mee2.png"
import girl from "../assets/icons/girl.png"
import man from "../assets/icons/man.png"
import man2 from "../assets/icons/man2.png"
import link from "../assets/icons/link.png"




const ProjectCard = ({ index, name, description, tags, image, source_code_link, deploy_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          // glare: true,
          // "max-glare": 0.5
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >

        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className=" w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
                onclick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                >
                  
            <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
            <img 
              src={github} 
              alt="github" 
              className="w-1/2 h-1/2 object-contain"
            />
            
              </a>
              
          </div>

          <a
          href={deploy_link}
          target="_blank"
          rel="noopener noreferrer"
          className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
            <img 
              src={link} 
              alt="link" 
              className="w-1/2 h-1/2 object-contain"
            />
            
              </a>
          </div>
          


        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
       <p className={styles.sectionSubText}>
              My works
       </p>
        <h2 className={styles.sectionHeadText}>
         Projects
         </h2>
      </motion.div>

    <div className="w-full flex">
      <motion.p
         variants={fadeIn("", "", 0.1, 1)}
         className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
         Following projects showcase my skills  and experience through real-wold examples of my work in web development.
          Below are some of the projects I have worked on. Each projects is briefly described with links to code repositories and live demos in it, They are deployed in Vercel.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`} 
            {...project}
          />
        ))}
    </div>

    <div className="mt-20 flex justify-center gap-6">
        <img
          src={mee0}
          alt="mee0"
          className="w-24 h-24 object-contain transform transition-all duration-300 hover:scale-150 hover:opacity-80"
        />
        <img
          src={man}
          alt="man"
          className="w-24 h-24 object-contain transform transition-all duration-300 hover:scale-125 hover:opacity-80"
        />
        <img
          src={mee2}
          alt="mee2"
          className="w-24 h-24 object-contain transform transition-all duration-300 hover:scale-125 hover:opacity-80"
        />
        <img
          src={girl}
          alt="girl"
          className="w-24 h-24 object-contain transform transition-all duration-300 hover:scale-125 hover:opacity-80"
        />
         <img
          src={boss}
          alt="boss"
          className="w-24 h-24 object-contain transform transition-all duration-300 hover:scale-125 hover:opacity-80"
        />
        <img
          src={man2}
          alt="man2"
          className="w-25 h-24 object-contain transform transition-all duration-300 hover:scale-125 hover:opacity-80"
        />
      </div>
    </>
  );
};
 
export default SectionWrapper( Works, "work");