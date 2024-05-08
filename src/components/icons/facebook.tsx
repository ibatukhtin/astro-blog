type Props = {
  size: number
}

const Facebook = ({size}: Props) => {
  return (
    <svg width={size} height={size} viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.4426 15.4688L17.9746 12H14.6465V9.75C14.6465 8.80078 15.1105 7.875 16.6012 7.875H18.1152V4.92188C18.1152 4.92188 16.7418 4.6875 15.4293 4.6875C12.6871 4.6875 10.8965 6.34922 10.8965 9.35625V12H7.84961V15.4688H10.8965V23.8547C11.5082 23.9508 12.134 24 12.7715 24C13.409 24 14.0348 23.9508 14.6465 23.8547V15.4688H17.4426Z'
        fill='white'/>
    </svg>
  );
};

export default Facebook;
