import React, { Component } from "react";
import PropTypes from "prop-types"
import throttle from "../common/throttle.js"
import "./TopButton.scss";

class TopButton extends Component {
  constructor(props) {
    super(props);

    this.topButton = React.createRef();
    this.scrollUp = this.scrollUp.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.toggleClassThrottle = throttle(this.toggleClass, 200);
  }

  toggleClass(event) {
    const topButton = this.topButton.current;
    const scrollTopValue
      = document.documentElement.scrollTop || document.scrollingElement.scrollTop;

    if (topButton.classList.contains('clicked')) {
      event.preventDefault();
    }

    if (scrollTopValue < 1000
      && topButton.classList.contains('fade-in')) {
      topButton.classList.remove('fade-in');

    } else if (1000 < scrollTopValue
      && !topButton.classList.contains('fade-in')) {
      topButton.classList.add('fade-in');
    }
  }

  scrollUp() {
    const topButton = this.topButton.current;
    if (topButton.classList.contains('clicked')) {
      return;
    }

    const duration = 1000;
    const cosParameter = window.scrollY / 2;
    let currentPhase = 0;
    let timestampOld = performance.now();

    function animateScroll() {
      const timestampNew = performance.now();
      const tsDiff = Math.round(timestampNew - timestampOld);
      timestampOld = timestampNew;

      currentPhase += Math.PI / (duration / tsDiff);
      if (currentPhase >= Math.PI) {
        clearTimeout(this.timeoutEvent);
        this.timeoutEvent = function () {
          topButton.classList.remove('clicked');
        }

        setTimeout(this.timeoutEvent, 300);
        return;
      }

      const pos = Math.round(cosParameter * Math.cos(currentPhase) + cosParameter);
      window.scrollTo(0, pos);
      window.requestAnimationFrame(animateScroll.bind(this));
    }

    topButton.classList.add('clicked');
    window.requestAnimationFrame(animateScroll.bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleClassThrottle, { passive: true });
    this.topButton.current.addEventListener('click', this.scrollUp);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleClassThrottle);
    this.topButton.current.removeEventListener('click', this.scrollUp);
  }

  render() {
    return (
      <div
        ref={this.topButton}
        className="top-button"
      >
        <span>↑</span>
      </div>
    );
  }
}

export default TopButton;

TopButton.propTypes = {
  // debug: PropTypes.array,
};
