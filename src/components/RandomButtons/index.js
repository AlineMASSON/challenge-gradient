// == Import
// npm
import { useDispatch } from 'react-redux';
import { changeFirstColor, changeLastColor } from '../../actions';

// utils
import { randomHexColor } from '../../utils';
// composants

// assets
import './randomButtons.scss';

// == Composant
function RandomButtons() {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={() => {
          dispatch(changeFirstColor(randomHexColor()));
        }}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={() => {
          dispatch(changeFirstColor(randomHexColor()));
          dispatch(changeLastColor(randomHexColor()));
        }}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={() => {
          dispatch(changeLastColor(randomHexColor()));
        }}
      >
        Random Last
      </button>
    </div>
  );
}

// == Export
export default RandomButtons;
