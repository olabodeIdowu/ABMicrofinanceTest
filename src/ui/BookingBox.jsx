import { BiLeaf } from 'react-icons/bi';
import { FaRegMap, FaLocationArrow } from 'react-icons/fa';
import BookingMiniBox from './BookingMiniBox';

export default function BookingBox() {
  return (
    <div className='bookingbox'>
      <div className='booking-details'>
        <img
          src='Rectangle 17-lazy.png'
          data-src='Rectangle 17.png'
          alt='Tour City'
          className='tour-image lazy-img'
        />
        <h6>Trip to Hawaii</h6>
        <p>
          14-29 June|<span> by JR Martinax</span>
        </p>
        <ul>
          <li>
            <BiLeaf />
          </li>
          <li>
            <FaRegMap />
          </li>
          <li>
            <FaLocationArrow />
          </li>
        </ul>
      </div>

      {/* <img
        src='image 872-lazy.png'
        data-src='image 872.png'
        alt='Aeroplane'
        className='aeroplane-image lazy-img'
      /> */}

      <img
        src='Background Element-lazy.png'
        data-src='Background Element.png'
        alt='Tour City'
        className='background-element lazy-img'
      />
      <BookingMiniBox />
    </div>
  );
}
