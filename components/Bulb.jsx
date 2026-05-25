import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-24 bottom-0 rotate-6 opacity-80 z-10 w-[260px] xl:w-[340px] select-none pointer-events-none animate-pulse">
      <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

      <Image
        src="/bulb.png"
        alt="bulb"
        width={340}
        height={300}
        className="w-full h-full drop-shadow-[0_0_35px_#00ffff]"
      />
    </div>
  );
};

export default Bulb;