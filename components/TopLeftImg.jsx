import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div
      className="
      absolute left-0 top-0 
      z-10 
      w-[240px] xl:w-[500px] 
      opacity-70 
      pointer-events-none 
      select-none
      mix-blend-screen
      animate-pulse
      "
    >
      {/* glow layer */}
      <div
        className="
        absolute inset-0 
        bg-cyan-400/20 
        blur-3xl 
        rounded-full
        "
      />

      {/* image */}
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={500}
        height={500}
        className="
        w-full h-full
        drop-shadow-[0_0_50px_rgba(34,211,238,0.35)]
        "
      />
    </div>
  );
};

export default TopLeftImg;