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
import section3_1 from "../assets/img/section3-1.jpg"
import section3_2 from "../assets/img/section3-2.jpg"
import section3_3 from "../assets/img/section3-3.jpg"
import section3_4 from "../assets/img/section3-4.jpg"
import section3_5 from "../assets/img/section3-5.jpg"
import green2 from "../assets/img/green2.jfif"

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

      {/* section3 */}
      <div className="w-full text-center flex lg:h-[800px] overflow-hidden mt-14">
        <div className="hidden w-[30%] h-[500px] ">
          <img className="border-4 border-[#ab8c5a] m-1 " src={section3_1} alt=""/>
        </div>
        <div className="w-full lg:w-[80%] lg:h-[800px] overflow-hidden lg:mr-1">
          <div className=" lg:h-[400px] lg:flex overflow-hidden">
            <img className="w-full h-[250px] lg:h-auto lg:w-auto m-1" src={green2} alt="" />
            <img className="w-full h-[250px] lg:h-auto border-4 border-[#ab8c5a] m-1" src={section3_2} alt=""/>             
          </div>
          <div className=" flex h-[400px] overflow-hidden mt-1 ">
          <img className="hidden  lg:block w-[33%] border-4 border-[#ab8c5a] mx-1 " src={section3_3} alt="" />
          <img className="w-full h-[350px] lg:h-auto lg:w-[33%] border-4 border-[#ab8c5a] lg:mx-1 " src={section3_4} alt="" />
          <img className=" hidden  lg:block w-[33%] border-4 border-[#ab8c5a] mx-1 " src={section3_5} alt="" />
          </div>
        </div>
      </div>

      {/* section4 */}
    </div>
  );
}

export default Section;
