import React from 'react';
import { connect } from 'react-redux';
import { themeSwitchClick } from 'src/actions';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import throttle from '../common/throttle.js';

import ReaderBoard from './ReaderBoard';
import ThemeSwitch from './ThemeSwitch';

import './PageHeader.scss';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollTop: this.props.scrollTop,
      hasReader: this.props.hasReader,
      isRolldown: this.props.isRolldown,
      isDocking: this.props.isDocking
    };

    // console.log('PageHeader', this.props);

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
    const { isDocking } = this.state;
    const pos = this.getCurrentScrollPos();
    const isOffsetTop = pos.curr <= 0;
    let isRolldown = false;

    if (pos.prev < pos.curr) {
      isRolldown = false;
    } else if (pos.prev > pos.curr) {
      isRolldown = true;
    }

    this.setState(
      {
        scrollTop: pos.curr,
        isRolldown: isRolldown,
        isDocking: isOffsetTop
      },
      () => {
        const { isDocking } = this.state;
        this.props.themeSwitchClick(!isDocking);
      }
    );
  }

  getCurrentScrollPos() {
    const currScrollTop =
      document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    let scrollTops = [].concat(this.state.scrollTops);
    let curr = 0;
    let prev = 0;

    prev = scrollTops.shift();
    scrollTops.push(currScrollTop);
    curr = scrollTops[0];

    return { prev: prev, curr: curr };
  }

  componentDidMount() {
    this.checkPathname();

    window.addEventListener('scroll', this.handleToggleHeaderThrottle, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleToggleHeaderThrottle);
  }

  render() {
    const { ...state } = this.state;

    return <Header {...state} />;
  }
}

const Header = props => {
  const { hasReader, isRolldown, isDocking } = props;
  const classState = isDocking
    ? 'main-header--docked'
    : isRolldown
    ? 'main-header--fade-in'
    : 'main-header--fade-out';

  return (
    <header className={`main-header ${classState}`}>
      <div className="main-header__container">
        <nav className="menu">
          <Link className="menu__link" to="/">
            HOME
          </Link>
          {/* <Link className="menu__link" to="/about">ABOUT</Link> */}
          {/* <Link className="menu__link" to="/archive">ARCHIVE</Link> */}
        </nav>
        <ThemeSwitch />
      </div>
      {hasReader && <ReaderBoard />}
    </header>
  );
};

PageHeader.defaultProps = {
  scrollTop: 0,
  hasReader: false,
  isRolldown: false,
  isDocking: true
};

PageHeader.propTypes = {
  scrollTop: PropTypes.number.isRequired,
  hasReader: PropTypes.bool.isRequired,
  isRolldown: PropTypes.bool.isRequired,
  isDocking: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isThemeSwitchClick: state.appTheme.isThemeSwitchClick
});

const mapDispatchToProps = dispatch => ({
  themeSwitchClick: bool => dispatch(themeSwitchClick(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);

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
