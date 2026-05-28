import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#0a192f] h-screen overflow-hidden relative">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-black/40 to-cyan-900/20 z-0"></div>

      {/* Content */}
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between h-full px-4 md:px-8">

          {/* TEXT SECTION */}
          <div className="text-center xl:text-left max-w-[700px] pt-24 md:pt-28 xl:pt-0 z-20">

            {/* TITLE */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                text-[42px]
                leading-[1.1]
                sm:text-[55px]
                md:text-[68px]
                xl:text-[78px]
                font-bold
              "
            >
              Transforming Ideas <br />
              Into <span className="text-accent">Digital Reality</span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                mt-4
                text-[15px]
                sm:text-base
                xl:text-lg
                text-white/80
                max-w-[90%]
                md:max-w-[600px]
                mx-auto
                xl:mx-0
              "
            >
              Passionate about building futuristic digital experiences,
              AI-powered systems, and modern web applications focused on
              creativity, performance, and innovation.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                mt-8
                flex
                justify-center
                xl:justify-start
                scale-75
                sm:scale-90
                xl:scale-100
                origin-center
              "
            >
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* IMAGE SECTION */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="
              absolute
              bottom-0
              right-0
              w-[220px]
              sm:w-[300px]
              md:w-[350px]
              xl:w-[650px]
              opacity-70
              sm:opacity-90
              xl:opacity-100
            "
          >
            <Avatar />
          </motion.div>
        </div>
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 z-[1]">
        <ParticlesContainer />
      </div>

      {/* Background Explosion */}
      <div
        className="
          hidden xl:block
          absolute
          right-0
          bottom-0
          w-full
          h-full
          bg-explosion
          bg-cover
          bg-right
          bg-no-repeat
          mix-blend-color-dodge
        "
      />
    </div>
  );
};

export default Home;