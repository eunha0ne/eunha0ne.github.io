import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import throttle from "../common/throttle.js"
import ReaderBoard from "./ReaderBoard";
import ThemeSwitch from "./ThemeSwitch"
import "./PageHeader.scss";

class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: this.props.positions,
      hasReader: this.props.hasReader,
      isRolldown: this.props.isRolldown,
      isDocking: this.props.isDocking
    };


    this.handleToggleHeader = this.handleToggleHeader.bind(this);
    this.handleToggleHeaderThrottle = throttle(this.handleToggleHeader, 100);
    this.getCurrentScrollPos = this.getCurrentScrollPos.bind(this);
    this.checkPathname = this.checkPathname.bind(this);
  }

  checkPathname() {
    const hasReader = /\/20/.test(window.location.pathname);
    if (this.state.hasReader !== hasReader) {
      this.setState({ hasReader: hasReader });
    }
  }

  handleToggleHeader() {
    const pos = this.getCurrentScrollPos();
    const isDocking = pos.curr <= 0 ? true : false;
    let isRolldown = false;

    if (pos.prev < pos.curr) isRolldown = false;
    else if (pos.prev > pos.curr) isRolldown = true;

    this.setState({
      positions: pos.curr,
      isRolldown: isRolldown,
      isDocking: isDocking
    });
  }

  getCurrentScrollPos() {
    const scrollTop = document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    let curr = 0, prev = 0;
    let positions = [].concat(this.state.positions);

    prev = positions.shift();
    positions.push(scrollTop);
    curr = positions[0];

    return { prev: prev, curr: curr };
  }

  componentDidMount() {
    this.checkPathname();

    window.addEventListener('scroll', this.handleToggleHeaderThrottle, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleToggleHeaderThrottle);
  }

  render() {
    const { ...state } = this.state;
    return (
      <Header { ...state } />
    );
  }
}

export default PageHeader;

const Header = (props) => {
  const { hasReader, isRolldown, isDocking, ...rest } = props;
  const classState = isDocking
    ? 'main-header--docked'
    : (isRolldown ? 'main-header--fade-in' : 'main-header--fade-out');

  return (
    <header className={`main-header ${classState}`}>
      <div className="main-header__container">
        <h1 className="main-header__title">{/* ... */}</h1>
        <nav className="menu">
          <Link className="menu__link" to="/">HOME</Link>
          <Link className="menu__link" to="/about">ABOUT</Link>
          <Link className="menu__link" to="/archive">ARCHIVE</Link>
        </nav>
        <ThemeSwitch/>
      </div>
      {hasReader && <ReaderBoard/>}
    </header>
  );
}

PageHeader.defaultProps = {
  positions: 0,
  hasReader: false,
  isRolldown: false,
  isDocking: true
};

PageHeader.propTypes = {
  positions: PropTypes.number.isRequired,
  hasReader: PropTypes.bool.isRequired,
  isRolldown: PropTypes.bool.isRequired,
  isDocking: PropTypes.bool.isRequired,
};

/* <참고 자료> nested cases and how to shape its proptypes.
React.PropTypes.arrayOf(
  React.PropTypes.shape({
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    aspectRatio: React.PropTypes.number.isRequired,
    lightboxImage: lightboxImageValidator,
  })
).isRequired.apply(this, arguments);
*/
