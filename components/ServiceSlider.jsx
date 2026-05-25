import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Development",
    description:
      "Building responsive, modern, and high-performance websites using React, Next.js, JavaScript, and modern UI.",
  },
  {
    Icon: RxRocket,
    title: "AI Solutions",
    description:
      "Developing AI-powered systems, smart automation tools, chatbots, and intelligent applications focused on innovation.",
  },
  {
    Icon: RxReader,
    title: "Cyber Security",
    description:
      "Exploring cybersecurity concepts, system protection, monitoring tools, and secure digital infrastructure development.",
  },
  {
    Icon: RxCrop,
    title: "UI / UX Design",
    description:
      "Designing clean, futuristic, and user-friendly digital interfaces with strong focus on user experience and creativity.",
  },
  {
    Icon: RxPencil2,
    title: "System Analysis",
    description:
      "Creating analytical tools, monitoring systems, and data-driven applications for efficient digital performance tracking.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 h-max rounded-2xl px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-500">
            {/* icon */}
            <div className="text-5xl text-cyan-300 mb-6 group-hover:scale-110 transition-all duration-300">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-3">
              <div className="mb-1 text-xl font-semibold tracking-wide">{item.title}</div>
              <p className="max-w-[350px] leading-relaxed text-white/70 text-sm"> {item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-4xl mt-4">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
