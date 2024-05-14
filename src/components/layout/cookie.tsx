import { useEffect, useRef } from 'react';
import '../../styles/cookie.styles.scss';

const Cookie = () => {
  const cookieWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cookieWrapper.current) {
      if (!localStorage.getItem('cookieAccepted')) {
        cookieWrapper.current.style.display = 'block';
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const acceptCookie = () => {
    if (cookieWrapper.current) {
      localStorage.setItem('cookieAccepted', 'true');
      cookieWrapper.current.style.display = 'none';
    }
  }

  return (
    <div className='cookie-wrapper' ref={ cookieWrapper } id='cookieWrapper'>
      <div className='cookie-container'>
        <div className='cookie-message'>
          This website uses cookies to enhance browsing experience. By continuing to visit this site you agree to our
          use of cookies.
        </div>
        <div className='cookie-buttons'>
          <button className='tp-button-outline' onClick={ () => acceptCookie() }>
            Got it
          </button>
          <a href='/privacy' className='tp-button-outline'>
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cookie;
