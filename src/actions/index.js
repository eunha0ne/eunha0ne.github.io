export const TOGGLE_THEME = 'TOGGLE_THEME';
export const THEME_SWITCH_CLICK = 'THEME_SWITCH_CLICK';

export const toggleAppTheme = isNightMode => ({
  type: TOGGLE_THEME,
  isNightMode
});

export const isAppThemeClick = isThemeSwitchClick => ({
  type: THEME_SWITCH_CLICK,
  isThemeSwitchClick
});
