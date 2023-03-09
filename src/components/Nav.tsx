/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import Burger from '../assets/shared/tablet/icon-hamburger.svg';
import Logo from '../assets/shared/desktop/logo.svg';
import Cart from '../assets/shared/desktop/icon-cart.svg';

const Nav = () => {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  return (
    <div className="nav px-6">
      <div className="inner rwd-width mx-auto py-8 px-4">
        <div className="flex gap-10">
          <button onClick={() => setActiveHamburger((pre: boolean) => !pre)}>
            <img src={Burger} alt="" className="h-5 w-5" />
          </button>
          <div className="navItemsOpen" data-active={activeHamburger}>
            <div className="navItem">
              <a href="http://">Home</a>
            </div>
            <div className="navItem">
              <a href="://">Headphones</a>
            </div>
            <div className="navItem">
              <a href="://">Speakers</a>
            </div>
            <div className="navItem">
              <a href="://">Earphones</a>
            </div>
          </div>
          <img src={Logo} className="md:items-start" alt="" />
        </div>
        <img src={Cart} className="" alt="" />
      </div>
    </div>
  );
};

export default Nav;
