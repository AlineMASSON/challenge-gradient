// == Import
// npm
import { useSelector } from 'react-redux';

// assets
import './nbColors.scss';

// == Composant
function NbColors() {
  const nbColors = useSelector((state) => state.nbColors);

  return (
    <div id="nbColors">
      {nbColors} couleur(s) générées
    </div>
  );
}

// == Export
export default NbColors;
