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
        className="mt-4 text-violet-300 text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Full-Stack Developer with hands-on experience building scalable, 
        high-performance web applications. I specialize in developing user-centered 
        solutions using modern technologies such as{" "}
        <span className="font-semibold">
          JavaScript, TypeScript, React, and Next.js
        </span>{" "}
        on the frontend, and{" "}
        <span className="font-semibold">
          Node.js, Python, SQL, and MongoDB
        </span>{" "}
        on the backend. My work emphasizes clean architecture, RESTful API design, 
        database optimization, and performance-driven development. With certifications 
        in Google Data Analytics and Google Cybersecurity, I combine strong engineering 
        practices with data-driven insight and security awareness to build reliable, 
        impactful digital products.
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
          <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-violet-300 text-[17px] max-w-3xl leading-[30px]"
      >
          Driven by curiosity and continuous learning, I am a Full-Stack Developer and Data Analyst currently pursuing a Master of Computer Science at Lakehead University. I hold a Bachelor’s degree in Computer Engineering from Istanbul Arel University and specialize in building secure, scalable web applications powered by modern technologies and data-driven systems.
          With foundations in software development, machine learning, and cybersecurity — supported by Google Data Analytics and Google Cybersecurity certifications — I focus on creating efficient, intelligent, and impactful digital solutions.
          I bring strong communication skills, adaptability, and a structured problem-solving mindset to every project I work on.          </motion.p>
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
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
