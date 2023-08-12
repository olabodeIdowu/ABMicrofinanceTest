import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

export default function MobileModal({ close }) {
  return createPortal(
    <main className='mobileModal'>
      <button onClick={close}>
        <HiXMark />
      </button>

      <nav className='mainNav'>
        <ul className='mainNav-list'>
          <li>
            <a className='mainNav-link' href='#'>
              Home
            </a>
          </li>
          <li>
            <a className='mainNav-link' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='mainNav-link' href='#'>
              Services
            </a>
          </li>
          <li>
            <a className='mainNav-link' href='#'>
              Upcoming Packages
            </a>
          </li>

          <li>
            <a className='btn mainNav-cta' href='#'>
              Get in Touch
            </a>
          </li>
        </ul>
      </nav>
    </main>,
    document.body
  );
}
