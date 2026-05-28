import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen overflow-hidden relative">
      {/* particles */}
      <div className="absolute inset-0 z-0 opacity-70">
        <ParticlesContainer />
      </div>

      {/* content */}
      <div className="relative z-10 w-full h-full bg-gradient-to-r from-blue-900/20 via-black/40 to-cyan-900/20">
        <div className="container mx-auto min-h-screen px-5 flex flex-col xl:flex-row items-center justify-center xl:justify-between">

          {/* LEFT SIDE */}
          <div className="text-center xl:text-left pt-28 md:pt-36 xl:pt-0 max-w-[700px]">

            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                text-[42px]
                leading-tight
                font-bold
                sm:text-[52px]
                md:text-[65px]
                xl:text-[78px]
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
                mt-5
                text-[15px]
                leading-7
                text-white/80
                max-w-[95%]
                mx-auto
                xl:mx-0
                sm:text-[16px]
                md:text-[17px]
                xl:max-w-xl
              "
            >
              Passionate about building futuristic digital experiences,
              AI-powered systems, and modern web applications focused on
              creativity, performance, and innovation.
            </motion.p>

            {/* button */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                mt-10
                flex
                justify-center
                xl:justify-start
                scale-90
                sm:scale-100
              "
            >
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="
              relative
              mt-10
              xl:mt-0
              w-[260px]
              sm:w-[320px]
              md:w-[420px]
              xl:w-[650px]
            "
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;