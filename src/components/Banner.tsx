/* eslint-disable import/no-dynamic-require */
import React from 'react';

import useWindowWidth from '../hooks/useWindowWidth';

const Banner = () => {
  const windowWidth = useWindowWidth();

  const speakersImg = require(`../assets/home/${windowWidth}/image-speaker-zx9.png`);
  const earphonesImg = require(`../assets/home/${windowWidth}/image-earphones-yx1.jpg`);

  return (
    <div className="grid gap-6 md:gap-8">
      <div className="banner banner-1 flex justify-center overflow-hidden bg-primary">
        <div className="flex w-[350px] flex-col items-center gap-6 lg:w-[900px] lg:flex-row lg:justify-between">
          <img
            src={speakersImg}
            alt=""
            className="w-[180px] pb-8 md:w-[200px] lg:relative lg:top-[100px] lg:w-[410px]"
          />
          <div className="flex max-w-[350px] flex-col items-center gap-6 lg:items-start">
            <h1 className="text-white sm:text-lg lg:text-left">ZX9 speaker</h1>
            <p className="text-white lg:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver truly
              remarkable sound.
            </p>
            <button className="btn bg-black hover:bg-[#4C4C4C]">See product</button>
          </div>
        </div>
      </div>
      <div className="banner banner-2 flex h-[320px] flex-col items-start justify-center gap-6 md:p-[95px]">
        <h4>ZX7 speaker</h4>
        <button className="btn-2">See product</button>
      </div>

      <div className="grid grid-cols-none grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-none">
        <div className="">
          <img src={earphonesImg} alt="" className=" rounded-lg object-cover" />
        </div>
        <div className="banner flex flex-col items-start justify-center gap-6 bg-gray md:pl-[50px] lg:pl-[100px]">
          <h4>YX1 earphones</h4>
          <button className="btn-2">See product</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
