/**
 * Actions
 */

const TOGGLE_THEME = 'theme/TOGGLE_THEME';
const IS_SWITCH_CLICK = 'theme/IS_SWITCH_CLICK';

/**
 * Actions Creators
 */

export const toggleTheme = () => ({
  type: TOGGLE_THEME
});

export const themeSwitchClick = isModeChange => ({
  type: IS_SWITCH_CLICK,
  isModeChange
});

/**
 * Reducer
 */

const initialState = {
  isNightMode: false,
  isModeChange: false
};

export default function theme(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME: {
      const { isNightMode } = state;
      return { ...state, isNightMode: !isNightMode };
    }

    case IS_SWITCH_CLICK: {
      return { ...state, isModeChange: action.isModeChange };
    }

    default: {
      return state;
    }
  }
}
