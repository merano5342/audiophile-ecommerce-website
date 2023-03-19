/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { ReactComponent as Burger } from '../assets/shared/tablet/icon-hamburger.svg';
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg';
import { ReactComponent as Cart } from '../assets/shared/desktop/icon-cart.svg';

const Nav = () => {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  return (
    <div className="nav px-6 dark:bg-gray">
      <div className="inner rwd-width mx-auto py-8 px-4 ">
        <div className="flex gap-10">
          <button onClick={() => setActiveHamburger((pre: boolean) => !pre)}>
            <Burger className="img-nav dark:img-nav-dark h-5 w-5" />
            {/* <img src={} alt="" className="h-5 w-5" /> */}
          </button>
          <div className='navItemsOpen' data-active={activeHamburger}>
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
          <Logo className="dark:img-nav-dark md:items-start " />
          {/* <img src={} className="md:items-start" alt="" /> */}
        </div>
        <Cart className="dark:img-nav-dark img-nav" />
        {/* <img src={Cart} className="" alt="" /> */}
      </div>
    </div>
  );
};

export default Nav;
