import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen overflow-hidden">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-blue-900/20 via-black/40 to-cyan-900/20">
        <div className="text-center flex flex-col justify-center pt-28 md:pt-32 xl:pt-40 xl:text-left min-h-screen container mx-auto px-6">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[38px] leading-tight md:text-[55px] xl:text-[78px] font-bold"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[95%] md:max-w-[600px] xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-16 text-sm md:text-base xl:text-lg"
          >
            Passionate about building futuristic digital experiences,
            AI-powered systems, and modern web applications
            focused on creativity, performance, and innovation.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0 overflow-hidden">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <div className="hidden md:block">
        <ParticlesContainer />
        </div>

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] md:max-w-[500px] xl:max-w-[737px] max-h-[678px] absolute -bottom-10 md:-bottom-16 lg:bottom-0 right-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
