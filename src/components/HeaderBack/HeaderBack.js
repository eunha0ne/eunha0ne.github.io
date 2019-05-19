import React, { Component }  from "react"
import PropTypes from "prop-types"
import throttle from "src/components/common/throttle.js"
import { connect } from 'react-redux';
import { toggleTheme } from 'src/state/app';
import "./HeaderBack.scss";

class HeaderBack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isNightMode: this.props.isNightMode,
    };

    this.node = { back: React.createRef() };
    this.info = { };

    this.setTransition = this.setTransition.bind(this);
    this.clearTransition = this.clearTransition.bind(this);
    this.setToggleBack = this.setToggleBack.bind(this);
    this.setToggleBackThrottle = throttle(this.setToggleBack, 100);
  }

  setToggleBack() {
    const scrollTop = document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    const backHeight = this.info.back.height;

    if (scrollTop >= backHeight) this.clearTransition();
    else this.setTransition();
  }

  clearTransition() {
    const themeNodes = this.node.themes;
    const states = [ 'enter', 'done' ];

    themeNodes.forEach(node => node.classList.remove(...states));
  }

  setTransition() {
    const selector = this.state.isNightMode ? 'night' : 'day';
    const node = this.node.back.current.getElementsByClassName(selector)[0];

    node.classList.add('enter');
    setTimeout(() => { node.classList.add('done') }, 30);
  }

  setComponentNode() {
    const back = this.node.back.current;
    this.info.back = { height: back.offsetHeight };
    this.node.themes = [
      back.getElementsByClassName('day')[0],
      back.getElementsByClassName('night')[0]
    ];
  }

  componentDidMount() {
    this.setComponentNode();
    this.setTransition();

    window.addEventListener('scroll', this.setToggleBackThrottle, { passive: true });
    window.addEventListener('resize', this.setBackInfo, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setToggleBackThrottle);
    window.removeEventListener('resize', this.setBackInfo);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps.isNightMode, 'this.props', this.props.isNightMode)
    if (prevProps.isNightModeh !== this.props.isNightMode) {
      return prevProps.isNightMode;
    } else return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState, 'snapshot', snapshot)
    if (snapshot !== null) {
      this.clearTransition();
      this.setTransition();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isNightMode !== nextProps.isNightMode) {
      return { isNightMode: nextProps.isNightMode };
    } else return null;
  }

  render() {
    return (
     <div ref={this.node.back} className="header-back" >
       <ul className="day">
         <li className="cactus"></li>
         <li className="cloud c1"></li>
         <li className="cloud c2"></li>
       </ul>
       <ul className="night">
         <li className="star s1"></li>
         <li className="star s2"></li>
         <li className="star s3"></li>
         <li className="star s4"></li>
         <li className="star s5"></li>
         <li className="star s6"></li>
       </ul>
     </div>
    );
  }
}

// export default HeaderBack;
export default connect(state => {
  return ({ isNightMode: state.app.isNightMode });
}, null)(HeaderBack);

HeaderBack.propTypes = {
  isNightMode: PropTypes.bool,
};
