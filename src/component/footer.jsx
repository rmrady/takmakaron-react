import React from "react";
import footer from "../assets/img/footer.jfif";
import logo from "../assets/img/logotak.gif";

function Footer() {
  return (
    <div className="w-full h-[400px] flex flex-col items-center mt-20">
      <div className="w-full h-[90px] overflow-hidden">
        <img className="w-[100%]" src={footer} alt="" />
      </div>
      <img className="mt-[-70px]" src={logo} alt="" />
      <p>ما به سلامت شما می اندیشیم</p>
      <div className="text-gray-500 ml-5 mt-2 ">
              <i class="bi bi-facebook ml-3"></i>
              <i class="bi bi-twitter ml-3"></i>
              <i class="bi bi-instagram ml-3"></i>
              <i class="bi bi-youtube ml-3"></i>
              <i class="bi bi-linkedin ml-3"></i>
              <i class="bi bi-telegram ml-3"></i>
        </div>
        <div className="w-[80%]  border-b border-gray-300 mx-32 mt-8"></div>
    </div>
  );
}

export default Footer;
