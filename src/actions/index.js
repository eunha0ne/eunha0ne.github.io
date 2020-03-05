export const TOGGLE_APP_THEME = 'TOGGLE_APP_THEME';
export const THEME_SWITCH_CLICK = 'THEME_SWITCH_CLICK';

export const toggleAppTheme = isNightMode => ({
  type: TOGGLE_APP_THEME,
  isNightMode
});

export const themeSwitchClick = isModeChanged => ({
  type: THEME_SWITCH_CLICK,
  isModeChanged
});
