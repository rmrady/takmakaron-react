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

      <div className="text-gray-500 font-bold ml-5 mt-2 ">
              <i class="bi bi-facebook ml-3"></i>
              <i class="bi bi-twitter ml-3"></i>
              <i class="bi bi-instagram ml-3"></i>
              <i class="bi bi-youtube ml-3"></i>
              <i class="bi bi-linkedin ml-3"></i>
              <i class="bi bi-telegram ml-3"></i>
        </div>

        <div className="w-[80%]  border-b border-gray-300 mx-32 mt-8"></div>

        <div className="w-[95%] mt-5">
          <ul className="lg:flex justify-center">
            <li className="lg:w-[20%] text-[20px] font-bold mt-5">تماس با ما
              <ul className="text-gray-500 text-[14px] font-bold ml-10">
                <li className="mt-3">۱۶۴۸</li>
                <li className="mt-3"> ۰۲۱۷۴۶۲۸۰۰۰</li>
                <li className="mt-3 "> تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک ۱۲۳۰، برج تین</li>
                <li className="mt-3"> info@takmakaron.com</li>
              </ul>
            </li>

            <li className="lg:w-[20%] text-[20px] font-bold mt-5">درباره ما
              <ul className="text-gray-500 text-[14px] font-bold">
                <li className="mt-3"> افتخارات</li>
                <li className="mt-3">محصولات</li>
                <li className="mt-3">تماس با ما</li>
              </ul>
            </li>

            <li className="lg:w-[20%] text-[20px] font-bold mt-5">رسپی
             <ul className="text-gray-500 text-[14px] font-bold"> 
                <li className="mt-3">دستور پخت ها</li>
             </ul>
            </li>


            <li className="lg:w-[20%] text-[20px] font-bold mt-5">دسترسی سریع
              <ul className="text-gray-500 text-[14px] font-bold">
                <li className="mt-3"> تک و شما</li>
                <li className="mt-3">خدمات مشتریان</li>
                <li className="mt-3">اپلیکیشن تک ماکارون</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="w-full bg-[#8080804b] border-t border-gray-400 text-[14px] px-40 py-5 mt-5">
            <p>تمامی حقوق این سایت متعلق به شرکت تولیدی تک ماکارون است.</p>
        </div>

    </div>
  );
}

export default Footer;
