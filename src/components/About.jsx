import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../higherOrderComp";
import { close } from "../assets";

import ali from "../assets/images/ali.jpeg";

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
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    return () => setShowModal(false);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}text-secondary`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me. </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-violet-300 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in both front-end and
        back-end development. I specialize in building dynamic, user-friendly
        applications using modern technologies. I work with JavaScript,
        TypeScript, React, Next.js, and Three.js on the front end, and use
        Python, Java, SQL, and MongoDB on the back end to create scalable,
        efficient systems. I enjoy turning ideas into functional, responsive,
        and elegant digital solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0, 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-20 flex justify-center "
      >
        <div className="text-section">
          <h2 className={styles.sectionHeadText}>Who am I</h2>
          <p className={`${styles.sectionSubText} text-violet-300`}>
            Driven by curiosity and the belief that learning never ends, I’m
            developer Djiboutian — a 23-year-old computer engineering graduate
            from Istanbul Arel University, originally from Djibouti. With a
            solid foundation in software development, machine learning, and
            cybersecurity, I aim to build meaningful and secure digital
            solutions. I speak English, French, Somali, and Turkish fluently,
            along with basic Arabic and Afar, allowing me to collaborate across
            cultures with ease. I hold four certifications, including my degree
            diploma and the Google Cybersecurity Professional Certificate, and
            I’m currently pursuing the Meta Back-End Developer Program to
            sharpen my backend expertise. Beyond the code, I bring strong soft
            skills: adaptability, empathy, clear communication, and a
            problem-solving mindset. I believe that progress lies in
            perseverance — and I’m always ready to grow, contribute, and create.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 flex flex-col items-center justify-center"
      >
        <h3 className="text-lg font-semibold text-[#915eff] mb-4 text-center">
          Nature inspires my creativity and focus
        </h3>
        <img
          src={ali}
          alt="Ahmed"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-l-purple-600 border-r-amber-100 cursor-pointer transition-transform duration-300 hover:scale-105 mb-4"
          onClick={() => setShowModal(true)}
        />
        <p className="text-base text-violet-400 text-center">
          (Click to view full image)
        </p>
      </motion.div>
      {/* Modal for full image */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button with image */}
            <button
              className="absolute -top-6 right-0 bg-purple-500 shadow-lg rounded-full p-2 z-20 hover:bg-black transition"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <img src={close} alt="Close" className=" w-3 h-3" />
            </button>

            <img
              src={ali}
              alt="Ahmed Full"
              className="w-[90vw] max-w-lg h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
<<<<<<< HEAD
      )}
=======
       <div className="mt-6 flex justify-center">
              <img
                src={ahmed}
                alt="Ahmed"
                className="w-[700px] h-[699px] object-contain rounded-full border-4 border-l-purple-600 border-r-amber-100"
              />
            </div>

              
>>>>>>> 9ef8f30731cf42625c78abe66491a7501b03e3eb
    </>
  );
};

<<<<<<< HEAD
export default SectionWrapper(About, "about");
=======
export default SectionWrapper(About, "about");
>>>>>>> 9ef8f30731cf42625c78abe66491a7501b03e3eb
