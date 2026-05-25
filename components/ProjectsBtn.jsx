import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="
        relative
        group
        flex items-center justify-center
        w-[170px] h-[170px]
        "
      >
        {/* rotating border */}
        <div
          className="
          absolute inset-0
          rounded-[30px]
          border border-cyan-400/30
          animate-spin-slow
          "
        />

        {/* glow */}
        <div
          className="
          absolute inset-3
          bg-gradient-to-br
          from-cyan-500/20
          via-purple-500/20
          to-cyan-300/10
          backdrop-blur-xl
          rounded-[25px]
          border border-white/10
          shadow-[0_0_40px_rgba(34,211,238,0.25)]
          "
        />

        {/* content */}
        <div
          className="
          relative z-20
          flex flex-col items-center
          "
        >
          <span
            className="
            text-sm tracking-[0.25em]
            uppercase text-white/80
            mb-3
            "
          >
            Explore
          </span>

          <div
            className="
            w-14 h-14
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            flex items-center justify-center
            group-hover:scale-110
            transition-all duration-300
            "
          >
            <HiArrowRight
              className="
              text-3xl text-white
              group-hover:translate-x-1
              transition-all duration-300
              "
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;