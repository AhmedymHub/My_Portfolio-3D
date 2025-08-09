import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";

import { certificate } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import link from "../assets/icons/link.png";
import google from "../assets/icons/google.png";

const ProjectCard = ({ index, name, image, source_code_link, deploy_link }) => {
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
                  src={google}
                  alt="google"
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
        </div>
      </Tilt>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pb-20 mx-auto">
      <div
        className={`${
          styles.paddingX
        } max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5
      ${/* on small screens no absolute, on sm+ absolute with top offset */ ""}
      sm:absolute sm:inset-0 sm:top-[120px]
    `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computer Engineering graduate focused on full-stack development and
            machine learning. Passionate about building smart, modern web
            systems.
          </p>
          <div className="mt-20 flex flex-col sm:flex-row gap-7">
            {certificate.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                variants={fadeIn("up", "spring", index * 0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
