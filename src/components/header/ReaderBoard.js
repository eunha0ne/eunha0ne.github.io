import React, { Component } from "react";
import PropTypes from "prop-types"
import throttle from "../common/throttle.js"
import "./ReaderBoard.scss";

class ReaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.progress,
    };

    this.node = {
      bar: React.createRef()
    };

    this.setProgressBar = this.setProgressBar.bind(this);
    this.setProgressBarThrottle = throttle(this.setProgressBar, 200);
    this.getCurrentProgress = this.getCurrentProgress.bind(this);
  }

  getCurrentProgress() {
    const heightScroll = document.body.scrollHeight;
    const heightWindow = window.innerHeight;
    const distance = heightScroll - heightWindow;
    const scrollTop = document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    const value = scrollTop < 0 ? 0 : scrollTop;

    return (value / distance * 100); //.toFixed(1);
  }

  setProgressBar() {
    const progress = this.getCurrentProgress();
    const value = progress >= 0 ? 100 - progress : 0;
    const fn = () => {
      this.node.bar.current.style.transform = `translateX(-${ value }%)`;
    };

    window.requestAnimationFrame(fn);
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.setProgressBarThrottle, { passive: true });
    window.addEventListener('scroll', this.setProgressBar);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.setProgressBarThrottle);
    window.removeEventListener('scroll', this.setProgressBar);
  }

  render() {
    return (
      <div className="progress-bar">
        <span ref={this.node.bar}></span>
      </div>
    );
  }
}

export default ReaderBoard;


ReaderBoard.defaultProps = {
  progress: `0%`
};

ReaderBoard.propTypes = {
  progress: PropTypes.string.isRequired,
};
