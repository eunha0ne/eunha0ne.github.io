export default function scrollToPos(callback) {
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
}
