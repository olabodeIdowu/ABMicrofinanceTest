import BookingBox from './BookingBox';

export default function Resort() {
  return (
    <section className='section-resort section'>
      <div className='container grid grid--2-cols margin-bottom-md'>
        <div className='container'>
          <span className='tropical-subheading'>Fast & Easy</span>
          <h2 className='heading-secondary'>
            Get Your Favourite Resort Bookings
          </h2>
          <ul>
            <li>
              <img src='Group 7.png' alt='Choose Destination' />
              <div className='resort-description'>
                <h6>Choose Destination</h6>
                <p className='booking-paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </li>
            <li>
              <img src='Group 12.png' alt='Check Availability' />
              <div className='resort-description'>
                <h6>Check Availability</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </li>
            <li>
              <img src='Group 11.png' alt='Let’s Go' />
              <div className='resort-description'>
                <h6>Let’s Go</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <BookingBox />
        </div>
      </div>
    </section>
  );
}
