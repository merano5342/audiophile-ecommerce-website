/* eslint-disable import/no-dynamic-require */

import useWindowWidth from '../hooks/useWindowWidth';

const Header = () => {
  const windowWidth = useWindowWidth();
  const HeaderImg = require(`../assets/home/${windowWidth}/image-header.jpg`);
  return (
    <div className="relative bg-black">
      <img src={HeaderImg} className="opacity-50" alt="" />
      <div className="absolute top-0 left-0 right-0 z-10 mx-auto flex h-full w-full max-w-[1110px] items-center justify-center lg:justify-start  ">
        <div className="flex max-w-[400px] flex-col items-center justify-center gap-6 px-10 md:px-4 lg:items-start  ">
          <span className="overline2 mb-4">New product</span>
          <h1 className="mb-6 text-white sm:text-lg lg:text-left">
            XX99 Mark II Headphones
          </h1>
          <p className="font-medium text-white opacity-75 lg:text-left">
            Experience natural, lifelike audio and exceptional build quality made for the
            passionate music enthusiast.
          </p>
          <button className="btn mt-10">See product</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
