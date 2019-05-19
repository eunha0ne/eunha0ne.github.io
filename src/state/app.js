const initialState = {
  isNightMode: false,
};

const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = isNightMode => (
  { type: TOGGLE_THEME, isNightMode }
);

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return { ...state, isNightMode: action.isNightMode }
    }

    default: {
      return state;
    }
  }
};
