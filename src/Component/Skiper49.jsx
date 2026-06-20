import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skiper49 = () => {
  const images = [
    { src: "https://img.freepik.com/free-photo/colorful-majestic-waterfall-national-park-forest-autumn_554837-6.jpg?semt=ais_hybrid&w=740&q=80", alt: "Illustration" },
    { src: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?cs=srgb&dl=pexels-pixabay-358457.jpg&fm=jpg", alt: "Illustration" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDFhgpdgpp8Pv9-Nyg5JyYEi1aoB3Z_rDyg&s", alt: "Illustration" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPfy_316rX4Y_MCHNig5qEEa3vmEMywSHlg&s", alt: "Illustration" },
    { src: "https://static3.bigstockphoto.com/0/7/3/large1500/370346935.jpg", alt: "Illustration" },
  ];

  return (
    <div className="flex mt-10 items-center justify-center overflow-hidden bg-gray-900">
      <Carousel_003 images={images} showPagination loop />
    </div>
  );
};

export default Skiper49;

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}) => {
  const css = `
    .Carousal_003 {
      width: 100%;
      height: 350px;
      padding-bottom: 50px !important;
    }

    .Carousal_003 .swiper-slide {
      width: 300px;
      background-position: center;
      background-size: cover;
    }

    .swiper-pagination-bullet {
      background-color: #000 !important;
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className={clsx("relative w-full max-w-4xl px-5", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? { delay: 1500, disableOnInteraction: true }
            : false
        }
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop={loop}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="Carousal_003"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </>
        )}
      </Swiper>
    </motion.div>
  );
};
