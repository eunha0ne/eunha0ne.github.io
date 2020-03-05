import * as types from 'src/actions';

const initialState = {
  isNightMode: false,
  isThemeSwitchClick: false
};

const appTheme = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME: {
      return { ...state, isNightMode: action.isNightMode };
    }

    case types.THEME_SWITCH_CLICK: {
      return { ...state, isThemeSwitchClick: action.isThemeSwitchClick };
    }

    default: {
      return state;
    }
  }
};

export default appTheme;
