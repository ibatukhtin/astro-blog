import React, { FC } from 'react';
import Image from 'next/image';
import BestStartup from '../../../../public/images/magazines/best-startup.webp';
import TrendHunter from '../../../../public/images/magazines/trend-hunter.webp';
import PhocusWire from '../../../../public/images/magazines/phocuswire.webp';
import StartupsMagazine from '../../../../public/images/magazines/startups-magazine.webp';
import ProductHunt from '../../../../public/images/magazines/product-hunt.webp';

const Magazines: FC = () => {
  return (
    <section id='magazines' className='magazines'>
      <div className='container'>
        <div className='magazines__content'>
          <div className='section-title'>
            <h2>As Featured On</h2>
          </div>
          <div className='magazines__grid'>
            <a href='https://beststartup.us/triplay-how-ai-helps-you-make-a-travel-plan-in-just-a-couple-of-minutes/'
               target='_blank'>
              <Image
                src={ BestStartup }
                alt='Best Startup'
              />
            </a>
            <a className='trend-hunter'
               href='https://www.trendhunter.com/trends/triplay-travel-planner' target='_blank'>
              <Image
                src={ TrendHunter }
                alt='Trend Hunter'
              />
            </a>
            <a className='phocus-wire-item'
               href='https://www.phocuswire.com/startup-stage-triplay-ai-create-personalized-travel-itineraries'
               target='_blank'>
              <Image
                src={ PhocusWire }
                alt='Phocus Wire'
                className='phocus-wire'
              />
            </a>
            <a href='https://startupsmagazine.co.uk/article-discovering-inspiration-through-travel-easier-triplay'
               target='_blank'>
              <Image
                src={ StartupsMagazine }
                alt='Startups Magazine'
                className='startups-magazine'
              />
            </a>
            <a href='https://www.producthunt.com/products/triplay#triplay' target='_blank'>
              <Image
                src={ ProductHunt }
                alt='Product Hunt'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Magazines;
