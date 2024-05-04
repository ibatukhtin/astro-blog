function Hero() {
  return (
    <section id='hero' className='hero'>
      <div className='row'>
        <div className='col'>
          <div className='hero__content'>
            <h1 className='hero__title'>
              Triplay Travel Planner:<br />
              Smart & Playful Trips!<br />
            </h1>
            <a
              className='landing__login button-with-arrow tp-button-filled'
              href='/create-trip'
              id='createTrip2'
            >
              <span className='mantine-Button-label'>
                Create trip
              </span>
            </a>
          </div>
        </div>
        <div className='col col-with-image'>
          <div className='hero__image'>
            <img
              src='../../../public/images/landing/hero-image.webp'
              alt='Triplay AI travel planning'
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
