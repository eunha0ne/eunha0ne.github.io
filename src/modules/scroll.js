const SET_IS_TOP = 'scroll/SET_IS_TOP';

export const setIsTop = state => ({
  type: SET_IS_TOP,
  isTop: state
});

const initialState = {
  isTop: false
};

export default function scroll(state = initialState, action) {
  switch (action.type) {
    case SET_IS_TOP: {
      return { ...state, isTop: action.state };
    }
    default: {
      return state;
    }
  }
}
