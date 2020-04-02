import { combineReducers } from 'redux';
import themeReducer from '~/modules/theme';
import scrollReducer from '~/modules/scroll';

const reducers = combineReducers({
  theme: themeReducer,
  scroll: scrollReducer
});

export default reducers;
