import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="
        absolute
        -left-16
        bottom-0
        rotate-6
        opacity-40
        xl:opacity-60
        z-0
        w-[180px]
        md:w-[240px]
        xl:w-[300px]
        select-none
        pointer-events-none
      "
    >
      {/* soft glow */}
      <div className="absolute inset-0 bg-cyan-500 blur-[90px] opacity-10 rounded-full"></div>

      {/* bulb image */}
      <Image
        src="/bulb.png"
        alt="bulb"
        width={300}
        height={260}
        className="w-full h-full drop-shadow-[0_0_12px_#00ffff]"
      />
    </div>
  );
};

export default Bulb;