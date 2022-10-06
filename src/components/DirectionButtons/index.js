// == Import
// npm
import { useDispatch } from 'react-redux';
import { changeDirection } from '../../actions';

// assets
import './directionButtons.scss';

// == Composant
function DirectionButtons() {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="toLeft"
        onClick={() => {
          dispatch(changeDirection(90));
        }}
      >
        to left
      </button>
      <button
        type="button"
        className="button"
        id="to45"
        onClick={() => {
          dispatch(changeDirection(45));
        }}
      >
        45 degrés
      </button>
      <button
        type="button"
        className="button"
        id="to135"
        onClick={() => {
          dispatch(changeDirection(135));
        }}
      >
        135 degrés
      </button>
      <button
        type="button"
        className="button"
        id="to225"
        onClick={() => {
          dispatch(changeDirection(225));
        }}
      >
        225 degrés
      </button>
      <button
        type="button"
        className="button"
        id="to315"
        onClick={() => {
          dispatch(changeDirection(315));
        }}
      >
        315 degrés
      </button>
      <button
        type="button"
        className="button"
        id="toRight"
        onClick={() => {
          dispatch(changeDirection(270));
        }}
      >
        to right
      </button>
    </div>
  );
}

// == Export
export default DirectionButtons;
