import * as types from 'src/actions';

const initialState = {
  isNightMode: false,
  isModeChanged: false
};

export default function appTheme(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_APP_THEME: {
      return { ...state, isNightMode: action.isNightMode };
    }

    case types.THEME_SWITCH_CLICK: {
      return { ...state, isModeChanged: action.isModeChanged };
    }

    default: {
      return state;
    }
  }
}
