import React from 'react';
import { connect } from 'react-redux';
import { toggleAppTheme, themeSwitchClick } from 'src/actions';

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

  handleClick() {
    const { isNightMode, toggleAppTheme, themeSwitchClick } = this.props;
    const reverseMode = !isNightMode;
    const name = reverseMode ? 'night' : 'day';

    toggleAppTheme(reverseMode);
    themeSwitchClick(true);
    this.setThemeClass(name);
  }

  render() {
    const { isNightMode, isModeChanged } = this.props;

    return (
      <div className="theme-switch">
        <button className="theme-switch__btn" onClick={this.handleClick}>
          <div
            className={`theme-switch__displayer ${
              isNightMode ? 'is-night' : 'is-day'
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

        {!isModeChanged && (
          <div className="theme-switch__guider">
            <span>Change your mood!</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isNightMode: state.appTheme.isNightMode,
  isModeChanged: state.appTheme.isModeChanged
});

const mapDispatchToProps = dispatch => ({
  toggleAppTheme: bool => dispatch(toggleAppTheme(bool)),
  themeSwitchClick: bool => dispatch(themeSwitchClick(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
