import { useState } from 'react';
import { AiFillCaretDown, AiOutlineCaretRight } from 'react-icons/ai';
import MobileModal from './MobileModal';

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [navActive, setNavActive] = useState(1);
  const [navOpen, setNavOpen] = useState(false);

  function handleServices(id) {
    setOpenServices(!openServices);
    setNavActive(id);
  }

  function handleNavOpen() {
    setNavOpen(!navOpen);
  }

  function handleClose() {
    setNavOpen(false);
  }

  return (
    <header className='header' id='header'>
      <a href='#'>
        <img className='logo' alt='Omnifood logo' src='logo.png' />
      </a>

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <a
              onClick={() => setNavActive(1)}
              style={
                navActive === 1
                  ? {
                      borderBottom: '2px solid #df6951',
                    }
                  : {}
              }
              className='main-nav-link nav-active'
              href='#'
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setNavActive(2)}
              style={
                navActive === 2
                  ? {
                      borderBottom: '2px solid #df6951',
                    }
                  : {}
              }
              className='main-nav-link'
              href='#'
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => handleServices(3)}
              className='main-nav-link'
              href='#'
            >
              Services
              {openServices ? <AiFillCaretDown /> : <AiOutlineCaretRight />}
            </a>

            {openServices && (
              <div>
                <div className='popups'>
                  {[
                    'Honeymoon packages',
                    'Tours packages',
                    'Musical Events',
                    'Build package',
                  ].map((services, i) => {
                    return <p key={i}>{services}</p>;
                  })}
                </div>
              </div>
            )}
          </li>
          <li>
            <a className='main-nav-link' href='#'>
              Upcoming Packages
            </a>
          </li>
        </ul>
      </nav>

      <div id='getIntouch'>
        <a className='main-nav-link nav-cta' href='#'>
          Get in Touch
        </a>
      </div>

      <button onClick={handleNavOpen} className='btn-mobile-nav'>
        {navOpen ? (
          <ion-icon
            id='close'
            className='icon-mobile-nav'
            name='close-outline'
          ></ion-icon>
        ) : (
          <ion-icon
            id='menu'
            className='icon-mobile-nav'
            name='menu-outline'
          ></ion-icon>
        )}
      </button>

      {navOpen && <MobileModal close={handleClose} />}
    </header>
  );
}
