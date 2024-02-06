import React from 'react'
import section1 from '../assets/img/section1.jfif';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.jpg';

function Section() {
  return (
    <div>
        {/* section1 */}
        <div className='w-full flex '>
            <div className='w-[50%] h-[600px]'>
                <img src={section1} alt="" />
            </div>

            <div className='w-[50%] h-[700px] overflow-hidden'>
                <div className='flex'>
                    <img className='w-[50%]' src={img1} alt="" />
                    <img className='w-[50%]' src={img2} alt="" />
                </div>
                <div className='flex'>
                    <img className='w-[50%]' src={img3} alt="" />
                    <img className='w-[50%]' src={img4} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section