import React, { Component } from "react"
import PropTypes from "prop-types"
import "./ThemeSwtich.scss";
import { connect } from 'react-redux';
import { toggleTheme } from 'src/state/app';

class ThemeSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNight: props.isNightMode
    };

    this.node = {
      btnItemRef: React.createRef()
    };

    this.handleClick = this.handleClick.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.toggleThemeTo = this.toggleThemeTo.bind(this);
  }

  setTheme(result) {
    this.toggleThemeTo(result, document.getElementById('___gatsby'));
    this.toggleThemeTo(result, this.node.btnItemRef.current);
  }

  toggleThemeTo(className, node) {
    const classNames = [ 'day', 'night' ];
    node.classList.remove(...classNames);
    node.classList.add(className);
  }

  handleClick() {
    this.setState({ isNight: !this.state.isNight }, () => {
      this.props.dispatch(toggleTheme(this.state.isNight));
      const currTheme = this.state.isNight ? 'night' : 'day';
      this.toggleThemeTo(currTheme, document.getElementsByTagName('body')[0]);
    });
  }

  componentDidMount() {
    var currTheme = this.state.isNight ? 'night' : 'day';
    this.toggleThemeTo(currTheme, document.getElementsByTagName('body')[0]);
  }

  render() {
    return (
      <div className="theme-switch">
        <button className="theme-switch__btn" onClick={this.handleClick}>
          <div
            className={`theme-switch__item-wrapper ${this.state.isNight ? 'night' : 'day'}`}
            ref={this.node.btnItemRef}
          >
            <div className="theme-switch__item theme-switch__item--night">
                <span className="moon"></span>
                {/* <span className="shadow"></span> */}
                <p>{this.props.nightName}</p>
            </div>
            <div className="theme-switch__item theme-switch__item--day">
                <span></span>
                <p>{this.props.dayName}</p>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

ThemeSwitch.defaultProps = {
  nightName: 'night',
  dayName: 'day',
  defaultTheme: 'day'
};

ThemeSwitch.propTypes = {
  nightName: PropTypes.string,
  dayName: PropTypes.string,
  defaultTheme: PropTypes.string,
};

// export default ThemeSwitch;
export default connect(state => ({
  isNightMode: state.app.isNightMode
}), null)(ThemeSwitch);
