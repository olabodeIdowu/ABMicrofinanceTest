export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container grid grid--footer'>
        <div className='logo-col'>
          <a href='#' className='footer-logo'>
            <img className='logo' alt='Omnifood logo' src='footerlogo.png' />
          </a>

          <p className='footer-details'>
            Travel helps companies manage payments easily.
          </p>

          <ul className='social-links'>
            <li>
              <a className='footer-link' href='#'>
                <img
                  src='052-linkedin.png'
                  className='social-icon'
                  alt='logo-Linkedln'
                />
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <img
                  src='Messenger.png'
                  className='social-icon'
                  alt='logo-Messenger'
                />
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <img
                  src='Twitter.png'
                  className='social-icon'
                  alt='llogo-twitter'
                />
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                <img src='Zoom.png' className='social-icon' alt='logo-zoom' />
              </a>
            </li>
          </ul>
        </div>

        <nav className='nav-col'>
          <p className='footer-heading'>Company</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link' href='#'>
                About Us
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                Careers
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                Blog
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                Pricing
              </a>
            </li>
          </ul>
        </nav>
        <nav className='nav-col'>
          <p className='footer-heading'>Destination</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link' href='#'>
                Maldives
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                Los Angeles
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                Las Vegas
              </a>
            </li>
            <li>
              <a className='footer-link' href='#'>
                Tonroto
              </a>
            </li>
          </ul>
        </nav>
        <nav className='nav-col'>
          <p className='footer-heading'>Join Our Newsletter</p>

          <form id='footerform'>
            <input
              id='footerform'
              type='text'
              placeholder='Your email address'
            />
            <button className='btn btn--full subscribe-text'>Subscribe</button>
          </form>
          <p
            style={{
              fontSize: '1.4rem',
              lineHeight: 1.6,
              color: '#767676',
              marginTop: '2.4rem',
              marginBottom: '2.4rem',
            }}
          >
            Will send you weekly updates for your better tour packages.
          </p>
        </nav>

        <div id='footer-absolute'>
          <img src='Footer img.png' />
        </div>
      </div>
    </footer>
  );
}
