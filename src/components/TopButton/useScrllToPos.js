import { useEffect } from 'react';

// TODO: 커스텀 훅으로 리팩토링
const handleScroll = callback => {
  const duration = 1000;
  const initPos = window.scrollY / 2;
  let currPhase = 0;
  let timeStampOld = performance.now();

  const scrolling = () => {
    const timeStampNew = performance.now();
    const timeDiff = Math.round(timeStampNew - timeStampOld);

    currPhase += Math.PI / (duration / timeDiff);
    if (currPhase >= Math.PI) {
      callback();
      return;
    }

    const restPos = Math.round(initPos * Math.cos(currPhase) + initPos);
    timeStampOld = timeStampNew;
    window.scrollTo(0, restPos);
    requestAnimationFrame(scrolling);
  };

  return requestAnimationFrame(scrolling);
};

export default function useScrollToPos(effect, deps) {
  const callback = () => {
    console.log('effect', effect);
    effect({ isReached: true });
  };

  useEffect(() => {
    console.log('deps', deps);
    handleScroll(callback);
  }, deps);
}
