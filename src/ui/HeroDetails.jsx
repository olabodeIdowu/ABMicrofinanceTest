import Filter from './Filter';

export default function HeroDetails() {
  return (
    <section>
      <div className='hero'>
        <div className='hero-img-box'>
          <img src='Vector 1.png' alt='Vector 1.png' />
        </div>

        <h1 className='heading-primary hero-heading'>
          No matter where you’re going to, we’ll take you there
        </h1>
        <Filter />
        <div className='delivered-meals'>
          <div className='delivered-imgs'>
            <img src='Ellipse 31.png' alt='Ellipse 31' />
            <img src='Ellipse 32.png' alt='Ellipse 32' />
            <img src='Ellipse 33.png' alt='Ellipse 33' />
            <img src='Ellipse 34.png' alt='Ellipse 34' />
            <img src='Ellipse 35.png' alt='Ellipse 35' />
            <img src='Ellipse 36.png' alt='Ellipse 36' />
            <img src='+.png' alt='Ellipse 37' />
          </div>

          <p className='delivered-text hero-imgs-text'>
            <span>2,500</span> people booked Tommorowland Event in last 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
