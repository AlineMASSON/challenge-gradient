// == Import
// npm
import { useSelector } from 'react-redux';

// assets
import './colors.scss';

// == Composant
function Colors() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      -
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}

// == Export
export default Colors;
