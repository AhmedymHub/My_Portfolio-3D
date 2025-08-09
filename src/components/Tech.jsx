import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../higherOrderComp";
import { technologies } from "../constants";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 80 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Tech = () => {
  return (
    <motion.div
      className="flex flex-row flex-wrap justify-center gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {technologies.map((technology) => (
        <motion.div
          className="w-28 h-28"
          key={technology.name}
          variants={itemVariants}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
