import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "License Plate Detection",
          category: "AI / Computer Vision",
          path: "/thumb1.jpg",
          link: "https://github.com/harshilpalande07",
        },
        {
          title: "3D Portfolio",
          category: "Modern Web Experience",
          path: "/thumb4.png",
          link: "https://github.com/harshilpalande07",
        },
        {
          title: "System Security Dashboard",
          category: "Security Analytics",
          path: "/thumb3.jpg",
          link: "https://github.com/harshilpalande07",
        },
        {
          title: "AI Chatbot System",
          category: "Automation / AI",
          path: "/thumb2.jpg",
          link: "https://github.com/harshilpalande07",
        },
      ],
    },

    {
      images: [
        {
          title: "System Monitoring Tool",
          category: "Analytics",
          path: "/thumb3.jpg",
          link: "https://github.com/harshilpalande07",
        },
        {
          title: "Digital Marketing System",
          category: "Web Platform",
          path: "/thumb1.jpg",
          link: "https://github.com/harshilpalande07",
        },
        {
          title: "AI Data Analyzer",
          category: "Machine Learning",
          path: "/thumb2.jpg",
          link: "https://github.com/harshilpalande07",
        },
        {
          title: "Future Tech UI",
          category: "UI / UX Design",
          path: "/thumb4.jpg",
          link: "https://github.com/harshilpalande07",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={25}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[320px] sm:h-[520px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-3xl overflow-hidden group border border-white/10 backdrop-blur-xl"
                key={imageI}
              >
                {/* image */}
                <div className="overflow-hidden">
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={700}
                    height={500}
                    className="
                      object-cover
                      group-hover:scale-110
                      transition-all
                      duration-700
                    "
                  />
                </div>

                {/* dark overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/20
                    group-hover:bg-black/40
                    transition-all duration-500
                  "
                />

                {/* glowing gradient */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition-all duration-700
                    bg-gradient-to-tr
                    from-cyan-500/50
                    via-purple-500/40
                    to-pink-500/50
                  "
                />

                {/* animated glow border */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    border border-cyan-400/0
                    group-hover:border-cyan-400/60
                    group-hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                    transition-all duration-500
                  "
                />

                {/* content */}
                <div
                  className="
                    absolute inset-0
                    flex flex-col justify-end
                    p-5
                    translate-y-6
                    opacity-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                >
                  {/* category */}
                  <div
                    className="
                      text-cyan-300
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      mb-2
                    "
                  >
                    {image.category}
                  </div>

                  {/* title */}
                  <h3 className="text-white text-xl font-bold mb-3">
                    {image.title}
                  </h3>

                  {/* button */}
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="
                      flex items-center gap-2
                      text-sm
                      w-max
                      px-4 py-2
                      rounded-full
                      bg-white/10
                      backdrop-blur-md
                      border border-white/20
                      hover:bg-cyan-400
                      hover:text-black
                      transition-all duration-300
                    "
                  >
                    View Project
                    <BsArrowRight className="text-lg" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;