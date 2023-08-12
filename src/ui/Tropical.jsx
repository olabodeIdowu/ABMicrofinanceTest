export default function Tropical() {
  return (
    <section className='section-tropical section'>
      <div className='container grid grid--2-cols margin-bottom-md'>
        <div>
          <img
            src='Illustration-lazy.png'
            data-src='Illustration.png'
            alt='couples'
            className='couples_png lazy-img'
          />
        </div>

        <div className='container'>
          <span className='tropical-subheading'>Honeymoon Specials</span>
          <h2 className='heading-secondary'>
            Our Romantic Tropical Destinations
          </h2>
          <p className='plan-text'>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <div id='view-packges'>
            <a href='#' className='btn btn--full'>
              View Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
