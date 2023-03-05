import { useState } from 'react';

const Nav = () => {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  return (
    <div className="nav">
      <Logo className="logoIcon" href="" />
      <Hamburger
        className="navItemsClosed"
        onClick={() => setActiveHamburger((pre: boolean) => !pre)}
      />
      <div className="navItemsOpen" data-active={activeHamburger}>
        <div className="navItem">
          <a href="">About</a>
        </div>
        <div className="navItem">
          <a href="">Discover</a>
        </div>
        <div className="navItem">
          <a href="">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default (Nav);
