import * as types from './ActionTypes';

export const toggleTheme = isNightMode => (
  { type: TOGGLE_THEME, isNightMode }
);
