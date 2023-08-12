import { useEffect, useRef } from 'react';
import { getCurrentYear } from '../utils/getCurrentYear';

export default function Copyright() {
  const year = useRef(null);
  useEffect(() => {
    getCurrentYear(year.current);
  });
  return (
    <div className='copyright'>
      <p>
        Copyright @ Xpro <span ref={year}>2022.</span> All Rights Reserved.
      </p>
    </div>
  );
}
