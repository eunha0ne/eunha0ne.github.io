import React from 'react';
import { connect } from 'react-redux';
import { toggleAppTheme, isAppThemeClick } from 'src/actions';

import './ThemeSwtich.scss';

class ThemeSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNight: props.isNightMode,
      isOnClick: props.isAppThemeClick
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
    const currState = {
      isNight: !this.state.isNight,
      isOnClick: true
    };

    // 현재 테마와 반대 속성으로 설정
    this.setState(currState, () => {
      const { isNight, isOnClick } = this.state;
      const currTheme = isNight ? 'night' : 'day';

      // 앱 전역에 상태 전달
      this.props.dispatch(toggleAppTheme(isNight));
      this.props.dispatch(isAppThemeClick(isOnClick));
      this.toggleThemeName(currTheme);
    });
  }

  componentDidMount() {
    const { isNight } = this.state;
    const currTheme = isNight ? 'night' : 'day';

    this.toggleThemeName(currTheme);
  }

  render() {
    const { isNight, isOnClick } = this.state;

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

        {!isOnClick && (
          <div className="theme-switch__guider">
            <span>Change your mood!</span>
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => {
  return {
    isNightMode: state.appTheme.isNightMode,
    isAppThemeClick: state.appTheme.isThemeSwitchClick
  };
}, null)(ThemeSwitch);
