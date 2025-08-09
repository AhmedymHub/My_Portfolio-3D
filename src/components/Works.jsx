import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../higherOrderComp";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import mee0 from "../assets/images/mee0.png";
import boss from "../assets/images/boss.png";
import mee2 from "../assets/images/mee2.png";
import girl from "../assets/images/girl.png";
import man from "../assets/images/man.png";
import man2 from "../assets/images/man2.png";
import link from "../assets/icons/link.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
}) => {
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
              onClick={() => window.open(source_code_link, "_blank")}
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
  );
};

const Works = () => {
  return (
    <section id="work" className="bg-primary px-4 py-10 sm:px-10">
      <motion.div
        style={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
        transition={{ duration: 0.5 }}
      >
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("up", "spring", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // fires more reliably on small screens
          className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] text-center sm:text-left px-4"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work in web development. Below are some of
          the projects I have worked on. Each project is briefly described with
          links to code repositories and live demos in it. They are deployed on
          Vercel.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={fadeIn("up", "spring", index * 0.05, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No projects found.
          </p>
        )}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {[mee0, man, mee2, girl, boss, man2].map((img, idx) => (
          <motion.div
            key={`img-${idx}`}
            variants={fadeIn("up", "spring", idx * 0.15, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={`decorative-${idx}`}
              className="w-24 h-24 object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:opacity-80"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
