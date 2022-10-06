import { CHANGE_DIRECTION, CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR } from '../actions';

const initialState = {
  firstColor: '#615c73',
  lastColor: '#d2c9ec',
  direction: '90deg',
  nbColors: 0,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };
    default:
      return state;
  }
}

export default reducer;
