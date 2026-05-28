import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen overflow-hidden relative">
      {/* content */}
      <div className="w-full min-h-screen bg-gradient-to-r from-blue-900/20 via-black/40 to-cyan-900/20">
        <div className="container mx-auto px-4 sm:px-6 h-screen flex flex-col justify-center items-center xl:items-start text-center xl:text-left relative z-20">
          
          {/* heading */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="
              text-[28px]
              leading-[1.1]
              sm:text-[42px]
              md:text-[55px]
              xl:text-[78px]
              font-bold
              mt-8
              sm:mt-0
            "
          >
            Transforming Ideas <br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="
              mt-4
              text-[13px]
              sm:text-[15px]
              md:text-base
              max-w-[320px]
              sm:max-w-[500px]
              xl:max-w-xl
              text-white/80
              mb-6
            "
          >
            Passionate about building futuristic digital experiences,
            AI-powered systems, and modern web applications focused
            on creativity, performance, and innovation.
          </motion.p>

          {/* button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="scale-75 sm:scale-90 xl:scale-100"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* particles */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ParticlesContainer />
      </div>

      {/* avatar */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
          absolute
          bottom-0
          right-[-40px]
          sm:right-0
          w-[220px]
          sm:w-[320px]
          md:w-[450px]
          xl:w-[700px]
          z-10
          opacity-80
        "
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;