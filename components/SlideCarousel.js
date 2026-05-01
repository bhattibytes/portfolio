import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SlideCarousel({
  children,
  singleSlide = false,
  className,
}) {
  const responsive =
    singleSlide === true
      ? { slidesPerView: 1, spaceBetween: 16 }
      : {
          slidesPerView: 1,
          spaceBetween: 16,
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          },
        };

  return (
    <Swiper
      className={className}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      {...responsive}
    >
      {children}
    </Swiper>
  );
}

export { SwiperSlide } from "swiper/react";
