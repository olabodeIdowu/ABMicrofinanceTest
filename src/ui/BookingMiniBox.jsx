export default function BookingMiniBox() {
  return (
    <aside className='bookingMini'>
      <img
        src='image 32-lazy.png'
        data-src='image 32.png'
        alt='traveller'
        className='traveller-img lazy-img'
      />

      <div className='bookingMini-details'>
        <h4 className='bookingMini-details-header'>Ongoing</h4>
        <h5>Trip to Rome</h5>
        <p>
          <span>40%</span> completed
        </p>
        <img src='Group 3.png' alt='range' className='range' />
      </div>
    </aside>
  );
}
