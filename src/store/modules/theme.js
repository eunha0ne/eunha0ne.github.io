const TOGGLE_THEME = 'theme/TOGGLE_THEME';
const THEME_SWITCH_CLICK = 'theme/THEME_SWITCH_CLICK';

export const toggleTheme = isNightMode => ({
  type: TOGGLE_THEME,
  isNightMode
});

export const themeSwitchClick = isModeChange => ({
  type: THEME_SWITCH_CLICK,
  isModeChange
});

const initialState = {
  isNightMode: false,
  isModeChange: false
};

export default function theme(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME: {
      return { ...state, isNightMode: action.isNightMode };
    }

    case THEME_SWITCH_CLICK: {
      return { ...state, isModeChange: action.isModeChange };
    }

    default: {
      return state;
    }
  }
}
