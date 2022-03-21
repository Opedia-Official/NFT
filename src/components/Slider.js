import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";

const image1 =
  "https://images.unsplash.com/photo-1643101809652-ef56a14818ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

SwiperCore.use([Autoplay]);

function Slider() {
  return (
    <div style={{ margin: "5% 0px 15%" }}>
      <div className="header">
        <h4>
          Get <span className="highlighted">Popular NFT </span> Collection
        </h4>
        <h4 className="mb-5">Here For You</h4>
      </div>

      {/* slider */}
      <Swiper
        // spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        Zoom={true}
        infinity={true}
        // slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        modules={[EffectFade]}
        effect="flips"
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          425: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "URL(https://images.unsplash.com/photo-1643101452019-bc00c9bba76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
          }}
        >
          <div
            className="slider"
            // style={{
            //   height: "370px",
            // }}
          ></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "URL(https://images.unsplash.com/photo-1643101809204-6fb869816dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          }}
        >
          <div className="slider"></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "URL(https://images.unsplash.com/photo-1643101448693-3904a4b43374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
          }}
        >
          <div className="slider"></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "URL(https://images.unsplash.com/photo-1643101447193-9c59d5db2771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
          }}
        >
          <div className="slider"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
