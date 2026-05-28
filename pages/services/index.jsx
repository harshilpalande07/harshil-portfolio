import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="h-full bg-[#07111f] relative overflow-hidden py-36 flex items-center">
      
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#07111f] to-purple-900/20 z-0" />

      {/* improved mobile glow effects */}
      <div
        className="
          absolute 
          top-10 left-0
          w-40 h-40
          sm:w-56 sm:h-56
          md:w-72 md:h-72
          bg-cyan-400/30
          rounded-full
          blur-[90px]
          sm:blur-[120px]
          md:blur-[140px]
          opacity-80
        "
      />

      <div
        className="
          absolute 
          bottom-0 right-0
          w-44 h-44
          sm:w-60 sm:h-60
          md:w-80 md:h-80
          bg-purple-500/30
          rounded-full
          blur-[100px]
          sm:blur-[130px]
          md:blur-[160px]
          opacity-80
        "
      />

      <Circles />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-12 items-center">
          
          {/* text */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-10 xl:mb-0">
            
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 leading-tight"
            >
              My Services{" "}
              <span className="text-cyan-400">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[450px] mx-auto lg:mx-0 text-white/70 text-[16px] leading-relaxed"
            >
              Creating modern web experiences, AI-powered solutions,
              cybersecurity-focused systems, and intelligent digital
              products designed for innovation, performance, and
              real-world impact.
            </motion.p>

            {/* mini badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-wider backdrop-blur-md">
                AI • Web • Security • Innovation
              </div>
            </div>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;