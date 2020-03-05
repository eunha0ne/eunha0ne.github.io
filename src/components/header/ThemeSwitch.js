import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from 'src/state/app';

import './ThemeSwtich.scss';

class ThemeSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNight: props.isNightMode
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleThemeName = this.toggleThemeName.bind(this);
  }

  toggleThemeName(currTheme) {
    const classNames = ['day', 'night'];
    const nodeClasses = document.body.classList;

    nodeClasses.remove(...classNames);
    nodeClasses.add(currTheme);
  }

  handleClick() {
    this.setState({ isNight: !this.state.isNight }, () => {
      const isNight = this.state.isNight;
      const currTheme = isNight ? 'night' : 'day';

      this.props.dispatch(toggleTheme(isNight));
      this.toggleThemeName(currTheme);
    });
  }

  componentDidMount() {
    const currTheme = this.state.isNight ? 'night' : 'day';

    this.toggleThemeName(currTheme);
  }

  render() {
    const { isNight } = this.state;

    return (
      <div className="theme-switch">
        <button className="theme-switch__btn" onClick={this.handleClick}>
          <div
            className={`theme-switch__displayer ${
              isNight ? 'is-night' : 'is-day'
            }`}
          >
            <div className="theme-switch__item theme-switch__item--night">
              <span>night</span>
            </div>
            <div className="theme-switch__item theme-switch__item--day">
              <span>day</span>
            </div>
          </div>
        </button>

        <div className="theme-switch__guider">
          <span>Change your mood!</span>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isNightMode: state.app.isNightMode
  }),
  null
)(ThemeSwitch);
