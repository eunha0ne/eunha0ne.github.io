import React, { useState, useEffect, useMemo } from 'react';
// import useScrollToPos from './useScrllToPos';

import * as S from './index.style';

const TopButton = () => {
  const [isHideButton, setIsHideButton] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const scrollToPos = () => {
    const duration = 1000;
    const initPos = window.scrollY / 2;
    let currPhase = 0;
    let timeStampOld = performance.now();

    const scrolling = () => {
      const timeStampNew = performance.now();
      const timeDiff = Math.round(timeStampNew - timeStampOld);

      currPhase += Math.PI / (duration / timeDiff);
      if (currPhase >= Math.PI) {
        console.log('/end');
        return;
      }

      const restPos = Math.round(initPos * Math.cos(currPhase) + initPos);
      timeStampOld = timeStampNew;
      window.scrollTo(0, restPos);
      requestAnimationFrame(scrolling);
    };

    return requestAnimationFrame(scrolling);
  };

  const handleScroll = () => {
    if (isClick) {
      console.log('/');
      scrollToPos();
    }
  };

  useEffect(() => {
    console.log('useEffect', isClick);
    handleScroll();
  }, [isClick]);

  return (
    // () => (
    <S.Button
      onClick={() => setIsClick(true)}
      className={isHideButton ? 'is-fade-out' : 'is-fade-in'}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3.646 11.854a.5.5 0 00.708 0L8 8.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 000-.8H2.8a.4.4 0 00-.4.4z"
          clipRule="evenodd"
        />
      </svg>
    </S.Button>
    // ),
  );
};

export { TopButton };
