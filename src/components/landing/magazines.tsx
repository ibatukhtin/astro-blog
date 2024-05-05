function Magazines() {
  return (
    <section id='magazines' className='magazines'>
      <div className='magazines__content'>
        <div className='section-title'>
          <h2>As Featured On</h2>
        </div>
        <div className='magazines__grid'>
          <a href='https://beststartup.us/triplay-how-ai-helps-you-make-a-travel-plan-in-just-a-couple-of-minutes/'
             target='_blank'>
            <img
              src='/images/magazines/best-startup.webp'
              alt='Best Startup'
              width='170'
              height='26'
              loading='lazy'
            />
          </a>
          <a className='trend-hunter'
             href='https://www.trendhunter.com/trends/triplay-travel-planner' target='_blank'>
            <img
              src='/images/magazines/trend-hunter.webp'
              alt='Trend Hunter'
              width='180'
              height='45'
              loading='lazy'
            />
          </a>
          <a className='phocus-wire-item'
             href='https://www.phocuswire.com/startup-stage-triplay-ai-create-personalized-travel-itineraries'
             target='_blank'>
            <img
              src='/images/magazines/phocuswire.webp'
              alt='Phocus Wire'
              width='198'
              height='41'
              className='phocus-wire'
              loading='lazy'
            />
          </a>
          <a href='https://startupsmagazine.co.uk/article-discovering-inspiration-through-travel-easier-triplay'
             target='_blank'>
            <img
              src='/images/magazines/startups-magazine.webp'
              alt='Startups Magazine'
              width='158'
              height='48'
              className='startups-magazine'
              loading='lazy'
            />
          </a>
          <a href='https://www.producthunt.com/products/triplay#triplay' target='_blank'>
            <img
              src='/images/magazines/product-hunt.webp'
              alt='Product Hunt'
              width='180'
              height='43'
              loading='lazy'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Magazines;
