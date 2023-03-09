import Logo from '../assets/shared/desktop/logo.svg';
import { ReactComponent as FbIcon } from '../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as InsIcon } from '../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return (
    <div className=" bg-black py-12">
      <div className="relative mx-auto  flex flex-col items-center gap-12 sm:mx-6 md:max-w-[689px] lg:max-w-[1110px]">
        <div className="absolute top-[-48px] h-1 w-[100px] bg-primary md:left-0" />
        <div className="flex w-full flex-col items-center gap-8 md:items-start md:gap-12 lg:flex-row lg:justify-between">
          <img src={Logo} alt="" className="pt-2" />
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <a href="http://">Home</a>
            <a href="http://">Headphones</a>
            <a href="http://">Speakers</a>
            <a href="http://">Earphones</a>
          </div>
        </div>
        <div className="md:grid-col-2 grid w-full items-center gap-12 md:justify-between">
          <p className="max-w-[540px] text-white50 md:col-span-2 md:text-left lg:row-span-1">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small
            team of music lovers and sound specialists who are devoted to helping you get
            the most out of personal audio. Come and visit our demo facility - we’re open
            7 days a week.
          </p>
          <p className="font-bold text-white50 md:mt-20 md:text-left lg:row-span-1">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex justify-center gap-4 md:mt-20 md:justify-end lg:row-span-1">
            <FbIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
            <InsIcon className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
