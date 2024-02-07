import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper/modules";
import section1 from "../assets/img/section1.jfif";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.jpg";

function Section() {
  return (
    <div>
      {/* section1 */}
      <div className="w-full lg:flex myfont">
        <div className="lg:w-[50%] lg:h-[680px]">
          <img src={section1} alt="" />
        </div>

        <div className="lg:w-[50%] lg:h-[680px] lg:overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-[50%] relative cursor-pointer hover_green">
              <img
                className="w-[100%] border-4 border-[#ab8c5a] "
                src={img1}
                alt=""
              />
              <p className="text-[25px] text-white font-bold absolute bottom-6 p-8">
                اخبار
              </p>
            </div>
            <div className="lg:w-[50%] relative cursor-pointer hover_green">
              <img
                className="w-[100%] border-4 border-[#ab8c5a] lg:mr-1"
                src={img2}
                alt=""
              />
              <p className="text-[25px] text-white font-bold absolute bottom-6 p-8">
                دستور پخت
              </p>
            </div>
          </div>

          <div className="lg:flex lg:mt-1">
            <div className="lg:w-[50%] relative cursor-pointer hover_green">
              <img
                className="w-[100%] border-4 border-[#ab8c5a]"
                src={img3}
                alt=""
              />
              <p className="text-[25px] text-white font-bold absolute bottom-6 p-8">
                محصولات
              </p>
            </div>
            <div className="lg:w-[50%] relative cursor-pointer hover_green">
              <img
                className="w-[100%] border-4 border-[#ab8c5a] lg:mr-1"
                src={img4}
                alt=""
              />
              <p className="text-[25px] text-white font-bold absolute bottom-6 p-8">
                درباره ما
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="w-full text-center mt-14">
        <h2 className="text-[55px] font-mono text-[#d4e4df]">TAK MAKARON</h2>
        <h3 className="text-[20px] font-bold mt-[-60px]">محصولات</h3>
        {/* ----------slider----------- */}
        <div className=" bg-[#eef0f1] mt-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img  src={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Section;
