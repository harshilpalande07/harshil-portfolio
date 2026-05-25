import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#111827] to-black py-36 flex items-center overflow-hidden relative">
      
      {/* glowing background effect */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full top-10 left-20 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-10 right-10 pointer-events-none" />

      <Circles />

      <div className="container mx-auto z-10">
        <div className="flex flex-col xl:flex-row gap-x-12 items-center">
          
          {/* text */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-8 xl:mb-0">
            
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12 leading-tight"
            >
              Featured <span className="text-cyan-400">Projects</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[450px] mx-auto lg:mx-0 text-white/70 leading-relaxed text-lg"
            >
              Exploring the intersection of AI, cybersecurity, automation,
              analytics, and modern web technologies through innovative
              real-world projects and futuristic digital experiences.
            </motion.p>

            {/* small glow line */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="w-24 h-1 bg-cyan-400 rounded-full mx-auto xl:mx-0 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            />
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[68%]"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
              <WorkSlider />
            </div>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;