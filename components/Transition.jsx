import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(12px)",
  },

  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },

  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(10px)",
  },
};

const Transition = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default Transition;