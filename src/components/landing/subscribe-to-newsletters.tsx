import React, { FC } from 'react';
import Image from 'next/image';
import Letters from "../../../../public/icons/letters.svg";
import FeedbackFormFooter from "@/app/_layout/components/feedback/feedback-form-footer";

const SubscribeToNewsLetters: FC = () => {
  return (
    <section id='subscribe'>
      <div className="container">
        <div className='footer__grid-subscribe'>
          <div className='footer__grid-subscribe-inner'>
            <div className='subscribe-header'>
              <div className='subscribe-header__text'>Subscribe to our Newsletters!</div>
              <Image
                src={ Letters }
                width={ 54 }
                height={ 54 }
                alt='Subscribe to our Newsletters!'
              />
            </div>
            <FeedbackFormFooter /></div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeToNewsLetters;
