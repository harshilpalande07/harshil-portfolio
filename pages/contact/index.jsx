import { motion } from "framer-motion";
import {
  BsArrowRight,
  BsGithub,
  BsLinkedin,
  BsEnvelopeFill,
} from "react-icons/bs";
import { useState } from "react";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Message Sent Successfully 🚀");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center justify-center py-24 px-6">

      {/* animated bg */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />

        <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      {/* floating grid */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          bg-[linear-gradient(rgb(188, 50, 206)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* main card */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="
          relative z-10
          w-full max-w-6xl
          rounded-[40px]
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.6)]
          overflow-hidden
          grid xl:grid-cols-2
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* LEFT SIDE */}
        <div
          className="
            relative p-12 xl:p-16
            border-b xl:border-b-0 xl:border-r
            border-white/10
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-purple-500/10
          "
        >

          {/* futuristic lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-[1px] bg-cyan-400/30" />
            <div className="absolute top-10 left-10 w-[1px] h-32 bg-cyan-400/30" />

            <div className="absolute bottom-10 right-10 w-32 h-[1px] bg-purple-400/30" />
            <div className="absolute bottom-10 right-10 w-[1px] h-32 bg-purple-400/30" />
          </div>

          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="
              text-5xl xl:text-6xl
              font-extrabold
              leading-tight
              mb-8
            "
          >
            Let’s Build <br />
            <span className="text-cyan-400">Future Systems</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="
              text-white/70
              text-lg
              leading-relaxed
              mb-12
              max-w-[500px]
            "
          >
            Open for collaborations in AI, futuristic web experiences,
            cybersecurity concepts, automation systems, and innovative
            digital solutions.
          </motion.p>

          {/* social cards */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            className="flex gap-5"
          >

            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/harshil-palande-251077410"
              target="_blank"
              rel="noreferrer"
              className="
                group relative
                w-[80px] h-[80px]
                rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-3xl text-white
                transition-all duration-500
                hover:-translate-y-3
                hover:rotate-6
                hover:border-blue-400/50
                hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
              "
            >
              <BsLinkedin className="group-hover:text-blue-400 transition-all duration-300" />
            </a>

            {/* github */}
            <a
              href="https://github.com/harshilpalande07"
              target="_blank"
              rel="noreferrer"
              className="
                group relative
                w-[80px] h-[80px]
                rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-3xl text-white
                transition-all duration-500
                hover:-translate-y-3
                hover:-rotate-6
                hover:border-white/50
                hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]
              "
            >
              <BsGithub className="group-hover:text-white transition-all duration-300" />
            </a>

            {/* gmail */}
            <a
              href="mailto:harshilpalande@gmail.com"
              className="
                group relative
                w-[80px] h-[80px]
                rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-3xl text-white
                transition-all duration-500
                hover:-translate-y-3
                hover:rotate-6
                hover:border-red-400/50
                hover:shadow-[0_0_35px_rgba(239,68,68,0.5)]
              "
            >
              <BsEnvelopeFill className="group-hover:text-red-400 transition-all duration-300" />
            </a>
          </motion.div>

          {/* floating cube effect */}
          <div
            className="
              absolute right-16 bottom-16
              w-24 h-24
              border border-cyan-400/20
              rotate-12
              animate-pulse
            "
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="relative p-12 xl:p-16">

          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >

            {/* top inputs */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  className="
                    w-full h-[65px]
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-6
                    text-white
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                  "
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                  className="
                    w-full h-[65px]
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-6
                    text-white
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                  "
                />
              </div>
            </div>

            {/* subject */}
            <input
              type="text"
              name="subject"
              placeholder="Project Subject"
              required
              disabled={isLoading}
              className="
                w-full h-[65px]
                bg-white/5
                border border-white/10
                rounded-2xl
                px-6
                text-white
                outline-none
                transition-all duration-300
                focus:border-cyan-400
                focus:shadow-[0_0_25px_rgba(34,211,238,0.3)]
              "
            />

            {/* textarea */}
            <textarea
              name="message"
              placeholder="Write your futuristic idea..."
              required
              disabled={isLoading}
              className="
                w-full min-h-[220px]
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                text-white
                outline-none
                resize-none
                transition-all duration-300
                focus:border-cyan-400
                focus:shadow-[0_0_25px_rgba(34,211,238,0.3)]
              "
            />

            {/* button */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                group relative
                overflow-hidden
                h-[70px]
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                text-white
                font-semibold
                text-lg
                tracking-wide
                transition-all duration-500
                hover:scale-[1.02]
                hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]
              "
            >

              <span
                className="
                  absolute inset-0
                  bg-white/10
                  translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-all duration-1000
                "
              />

              <div className="relative flex items-center justify-center gap-3">
                Send Message
                <BsArrowRight className="text-2xl group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;