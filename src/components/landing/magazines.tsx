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
            />
          </a>
          <a className='trend-hunter'
             href='https://www.trendhunter.com/trends/triplay-travel-planner' target='_blank'>
            <img
              src='/images/magazines/trend-hunter.webp'
              alt='Trend Hunter'
            />
          </a>
          <a className='phocus-wire-item'
             href='https://www.phocuswire.com/startup-stage-triplay-ai-create-personalized-travel-itineraries'
             target='_blank'>
            <img
              src='/images/magazines/phocuswire.webp'
              alt='Phocus Wire'
              className='phocus-wire'
            />
          </a>
          <a href='https://startupsmagazine.co.uk/article-discovering-inspiration-through-travel-easier-triplay'
             target='_blank'>
            <img
              src='/images/magazines/startups-magazine.webp'
              alt='Startups Magazine'
              className='startups-magazine'
            />
          </a>
          <a href='https://www.producthunt.com/products/triplay#triplay' target='_blank'>
            <img
              src='/images/magazines/product-hunt.webp'
              alt='Product Hunt'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Magazines;
