import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
        ],
      },
      {
        title: "AI & Database",
        icons: [FaWordpress, FaFigma, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "License Plate Detection System",
        stage: "AI & Computer Vision",
      },
      {
        title: "System Analyzer",
        stage: "Monitoring & Analytics",
      },
      {
        title: "AI Chatbot",
        stage: "Automation & Assistance",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend & Web Development",
        stage: "3+ Years Learning",
      },
      {
        title: "AI & Machine Learning Projects",
        stage: "Hands-on Development",
      },
      {
        title: "Cybersecurity & System Analysis",
        stage: "Exploring Advanced Technologies",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Google AI Certification",
        stage: "Completed",
      },
      {
        title: "Microsoft Technology Certification",
        stage: "Completed",
      },
      {
        title: "Meta ML / Data Analytics",
        stage: "Completed",
      },
      {
        title: "Cloud Computing",
        stage: "Learning & Development",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-[#07111f] relative overflow-hidden py-32 text-center xl:text-left">
      
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#07111f] to-purple-900/20 z-0" />

      {/* glowing effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px]" />

      <Circles />

      {/* avatar img */}
      <motion.div
  variants={fadeIn("right", 1.0)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="
  hidden xl:flex
  absolute
  bottom-0
  left-[-200px]
  2xl:left-[-40px]
  z-10
  "
>
  <Avatar />
</motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-10 relative z-20">
        
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 leading-tight"
          >
            Building{" "}
            <span className="text-cyan-400">innovative</span> digital
            solutions through creativity, AI, and modern technology.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[550px] mx-auto xl:mx-0 mb-8 xl:mb-12 px-2 xl:px-0 text-white/70 leading-relaxed text-[15px]"
          >
            I’m a passionate diploma student at G.V Acharya Polytechnic with
            strong interest in AI, cybersecurity, and modern web development.
            Over the last 3 years, I’ve worked on multiple real-world projects
            including AI chatbots, license plate detection systems, and advanced
            system analysis tools while continuously exploring new technologies
            and digital innovation.
          </motion.p>

          {/* badge */}
          <div className="mb-10 flex justify-center xl:justify-start">
            <div className="px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-wider backdrop-blur-md">
              AI • Web Development • Cybersecurity • Innovation
            </div>
          </div>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-8">

              {/* learning */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-cyan-400/20 after:absolute after:top-0 after:right-0">
                <div className="text-3xl xl:text-5xl font-extrabold text-cyan-400 mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[2px] leading-[1.6] max-w-[120px] text-white/60">
                  Years of learning.
                </div>
              </div>

              {/* certifications */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-cyan-400/20 after:absolute after:top-0 after:right-0">
                <div className="text-3xl xl:text-5xl font-extrabold text-cyan-400 mb-2">
                  <CountUp start={0} end={15} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[2px] leading-[1.6] max-w-[120px] text-white/60">
                  Tech certifications.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-cyan-400/20 after:absolute after:top-0 after:right-0">
                <div className="text-3xl xl:text-5xl font-extrabold text-cyan-400 mb-2">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[2px] leading-[1.6] max-w-[120px] text-white/60">
                  Completed projects.
                </div>
              </div>

              {/* technologies */}
              <div className="relative flex-1">
                <div className="text-3xl xl:text-5xl font-extrabold text-cyan-400 mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[2px] leading-[1.6] max-w-[120px] text-white/60">
                  Core technologies.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[500px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-8">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-cyan-400 after:w-[100%] after:bg-cyan-400 after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-4 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col md:flex-row gap-x-2 items-center text-center xl:text-left text-white/70"
              >
                {/* title */}
                <div className="font-medium text-white mb-2 md:mb-0">
                  {item.title}
                </div>

                <div className="hidden md:flex text-cyan-400">-</div>

                <div>{item.stage}</div>

                <div className="flex gap-x-4 ml-auto">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div
                      key={iconI}
                      className="text-2xl text-cyan-300 hover:scale-110 transition-all duration-300"
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;