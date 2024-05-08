type Props = {
  size: number
}

const Twitter = ({size}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.5763 18.3301C15.8983 18.3301 18.8083 13.9201 18.8083 10.0981C18.8083 9.97212 18.8083 9.84612 18.8023 9.72612C19.3663 9.31812 19.8583 8.80812 20.2483 8.22612C19.7323 8.45412 19.1743 8.61012 18.5863 8.68212C19.1863 8.32212 19.6423 7.75812 19.8583 7.08012C19.3003 7.41012 18.6823 7.65012 18.0223 7.78212C17.4943 7.21812 16.7443 6.87012 15.9103 6.87012C14.3143 6.87012 13.0183 8.16612 13.0183 9.76212C13.0183 9.99012 13.0423 10.2121 13.0963 10.4221C10.6903 10.3021 8.5603 9.15012 7.1323 7.39812C6.8863 7.82412 6.7423 8.32212 6.7423 8.85012C6.7423 9.85212 7.2523 10.7401 8.0323 11.2561C7.5583 11.2441 7.1143 11.1121 6.7243 10.8961C6.7243 10.9081 6.7243 10.9201 6.7243 10.9321C6.7243 12.3361 7.7203 13.5001 9.0463 13.7701C8.8063 13.8361 8.5483 13.8721 8.2843 13.8721C8.0983 13.8721 7.9183 13.8541 7.7383 13.8181C8.1043 14.9701 9.1723 15.8041 10.4383 15.8281C9.4483 16.6021 8.2003 17.0641 6.8443 17.0641C6.6103 17.0641 6.3823 17.0521 6.1543 17.0221C7.4203 17.8501 8.9443 18.3301 10.5763 18.3301Z'
        fill='white'/>
    </svg>

  );
};

export default Twitter;
