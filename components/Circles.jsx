import Image from "next/image";

const Circles = () => {
  return (
    <div className="absolute right-0 bottom-0 z-0 opacity-70 pointer-events-none select-none">

      {/* glow */}
      <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-20 rounded-full"></div>

      {/* circles image */}
      <div className="w-[260px] xl:w-[420px] animate-spin-slow">
        <Image
          src="/circles.png"
          alt="circles"
          width={420}
          height={420}
          className="w-full h-full mix-blend-screen opacity-80 drop-shadow-[0_0_40px_#00ffff]"
        />
      </div>
    </div>
  );
};

export default Circles;