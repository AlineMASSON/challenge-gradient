// == Import
// npm
import { useSelector } from 'react-redux';

// assets
import './gradient.scss';

// == Composant
function Gradient() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);
  return (
    <div id="gradient" style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }} />
  );
}

// == Export
export default Gradient;
