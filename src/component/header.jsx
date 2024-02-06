import React, { useRef, useState ,useEffect} from "react";
import green from "../assets/img/green1.jfif";
import EN from "../assets/img/EN.gif";
import AR from "../assets/img/AR.jpg";
import TR from "../assets/img/TR.gif";
import logo from "../assets/img/logotak.gif";
import vedio from "../assets/img/vedio.mp4";

function Header() {
  const [inp, setInp] = useState(" جستجو در سایت");
  const HamdergerMenu = useRef();
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  function show_Hmenu() {
    HamdergerMenu.current.classList.toggle("mr-0");
  }
  function hide_Hmenu() {
    HamdergerMenu.current.classList.remove("mr-0");
  }

  return (
    <div className="relative myfont">
      {/* header1 */}
      <header className="w-full fixed top-0 ">
        <img className="w-full h-[40px]  lg:h-[50px]" src={green} alt="" />
        <div className=" w-full absolute top-2 lg:top-4 flex justify-end lg:justify-between lg:px-32 ">
          <div className="hidden  lg:flex  text-white">
            <div className="ml-5">
              <i class="bi bi-facebook ml-3"></i>
              <i class="bi bi-twitter ml-3"></i>
              <i class="bi bi-instagram ml-3"></i>
              <i class="bi bi-youtube ml-3"></i>
              <i class="bi bi-linkedin ml-3"></i>
              <i class="bi bi-telegram ml-3"></i>
            </div>
            <div className="ml-5">
              <p>تک ماکارون، تنها در اوج</p>
            </div>
          </div>
          <div>
            <ul className="flex text-white">
              <li className="ml-5 flex border-l border-gray-300 pl-3">
                <p className="ml-2">EN</p>
                <img className="w-[40%]" src={EN} alt="" />
              </li>
              <li className="ml-5 flex border-l border-gray-300 pl-3">
                <p className="ml-2">TR</p>
                <img className="w-[40%]" src={TR} alt="" />
              </li>
              <li className="ml-5 flex ">
                <p className="ml-2">AR</p>
                <img className="w-[30%]" src={AR} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* header2 */}
      <div className="w-full h-[100px] flex justify-between shadow-xl shadow-gray-300 pt-7 lg:px-32 mt-14 relative z-20">
        <i
          onClick={show_Hmenu}
          class="bi bi-list ml-3 lg:hidden text-[35px] font-bold cursor-pointer px-5"
        ></i>

        {/* hamderger-menu */}
        <div
          ref={HamdergerMenu}
          className="w-[100%] h-[100vh]  flex absolute top-0 mr-[-110%] transitionR"
        >
          <div className="w-[60%] bg-white">
            <div className="h-14 flex shadow-xl shadow-gray-300">
              <input
                value={inp}
                className="w-[90%] text-[19px] font-bold text-gray-400 px-3"
                type="text"
              />
              <i class="bi bi-search text-[20px] text-gray-600 font-bold ml-3 p-3"></i>
            </div>
            <ul>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                خانه
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                درباره ما
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                محصولات
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                افتخارات
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                اخبار و مقالات
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                جام جهانی
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                خدمات مشتریان
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                دستور پخت
              </li>
              <li className="w-full font-semibold text-gray-600  border-b border-gray-300 px-3 py-3">
                تماس با ما
              </li>
            </ul>
          </div>
          <div onClick={hide_Hmenu} className="w-[40%] bg-[#000000af]"></div>
        </div>
        {/* header-menu */}
        <div>
          <ul className="hidden lg:flex">
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              درباره ما
            </li>
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              محصولات
            </li>
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              دستور پخت
            </li>
            <li className="ml-3 text-[15px] text-gray-600 font-bold">
              اخبار و مقالات
            </li>
          </ul>
        </div>
        <div>
          <img
            className="w-[50%]  ml-14 lg:ml-0 lg:mr-14 mt-[-10px] "
            src={logo}
            alt=""
          />
        </div>
        <div>
          <ul className="hidden lg:flex">
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              افتخارات
            </li>
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              خدمات مشتریان
            </li>
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              جام جهانی
            </li>
            <li className="ml-3 border-l border-gray-300 text-[15px] text-gray-600 font-bold pl-3">
              قرعه کشی
            </li>
            <li className="ml-3 text-[15px] text-gray-600 font-bold">
              تماس با ما
            </li>
            <li>
              <i class="bi bi-search ml-3 text-[20px] text-gray-600 font-bold"></i>
            </li>
          </ul>
        </div>
      </div>

      {/* header-main */}
      <div className=" mt-3 z-0">
        <video src={vedio} ref={vidRef} muted autoPlay loop />
      </div>
    </div>
  );
}

export default Header;
