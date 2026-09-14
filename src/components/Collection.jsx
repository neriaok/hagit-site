import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Collection() {
  const scarves = Array.from({ length: 6 });

  return (
    <section id="collection" className="container section">
      <h3 className="collection-title">הקולקציה שלנו</h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ padding: "20px 0" }}
      >
        {scarves.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="scarf-card">
              <img
                src={`/placeholder-${i + 1}.jpg`}
                alt={`מטפחת ${i + 1}`}
                className="scarf-img"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
