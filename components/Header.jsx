import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full xl:h-[90px]">
      <div className="w-full flex items-center justify-between px-5 xl:px-12 py-6">
        
        {/* logo */}
<Link
  href="/"
  className="
  z-50
  p-2
  rounded-2xl
  bg-white/5
  backdrop-blur-md
  border border-white/10
  hover:border-cyan-400/40
  hover:bg-white/10
  transition-all duration-300
  "
>
  <Image
    src="/harshu.png"
    alt="logo"
    width={80}
    height={60}
    priority
    className="
    hover:scale-110
    transition-all duration-300
    drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]
    "
  />
</Link>

        {/* socials */}
        <Socials />
      </div>
    </header>
  );
};

export default Header;