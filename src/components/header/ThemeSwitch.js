import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme, themeSwitchClick } from 'src/store/modules/theme';
import * as cx from 'classNames';

import './ThemeSwtich.scss';

class ThemeSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.setThemeClass = this.setThemeClass.bind(this);
  }

  setThemeClass(name) {
    const classNames = ['day', 'night'];
    const nodeClasses = document.body.classList;

    nodeClasses.remove(...classNames);
    nodeClasses.add(name);
  }

  getThemeName(reverseMode) {
    if (reverseMode === undefined || reverseMode === null) {
      reverseMode = this.props.isNightMode;
    }

    return reverseMode ? 'night' : 'day';
  }

  handleClick() {
    const { isNightMode, toggleTheme, themeSwitchClick } = this.props;
    const reverseMode = !isNightMode;

    toggleTheme(reverseMode);
    themeSwitchClick(true);
    this.setThemeClass(this.getThemeName(reverseMode));
  }

  componentDidMount() {
    this.setThemeClass(this.getThemeName());
  }

  render() {
    const { isNightMode, isModeChange } = this.props;

    return (
      <div className="theme-switch">
        <button className="theme-switch__btn" onClick={this.handleClick}>
          <div
            className={cx([
              'theme-switch__displayer',
              isNightMode ? 'is-night' : 'is-day'
            ])}
          >
            <div className="theme-switch__item theme-switch__item--night">
              <span>night</span>
            </div>
            <div className="theme-switch__item theme-switch__item--day">
              <span>day</span>
            </div>
          </div>
        </button>

        {!isModeChange && (
          <div className="theme-switch__guider">
            <span>Change your mood!</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isNightMode: state.theme.isNightMode,
  isModeChange: state.theme.isModeChange
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: bool => dispatch(toggleTheme(bool)),
  themeSwitchClick: bool => dispatch(themeSwitchClick(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
