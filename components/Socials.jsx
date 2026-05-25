import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-7 text-3xl">

      {/* github */}
      <Link
        href="https://github.com/harshilpalande07"
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-white/80
        hover:text-black
        hover:bg-white
        hover:shadow-[0_0_20px_#ffffff]
        hover:scale-125
        p-2 rounded-full
        transition-all duration-300
        "
      >
        <RiGithubLine />
      </Link>

      {/* linkedin */}
      <Link
        href="https://www.linkedin.com/in/harshil-palande-251077410"
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-white/80
        hover:text-blue-400
        hover:shadow-[0_0_20px_#3b82f6]
        hover:scale-125
        p-2 rounded-full
        transition-all duration-300
        "
      >
        <RiLinkedinLine />
      </Link>

      {/* whatsapp */}
      <Link
        href="https://wa.me/917208508950"
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-white/80
        hover:text-green-400
        hover:shadow-[0_0_20px_#22c55e]
        hover:scale-125
        p-2 rounded-full
        transition-all duration-300
        "
      >
        <RiWhatsappLine />
      </Link>

      {/* gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=harshilpalande@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-white/80
        hover:text-red-400
        hover:shadow-[0_0_20px_#ff4d4d]
        hover:bg-white/10
        hover:scale-125
        p-2 rounded-full
        transition-all duration-300
        "
      >
        <RiMailLine />
      </a>

    </div>
  );
};

export default Socials;