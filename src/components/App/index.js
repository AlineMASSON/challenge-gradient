// == Import
// npm

// composants
import NbColors from '../NbColors';
import RandomButtons from '../RandomButtons';
import Colors from '../Colors';
import Gradient from '../Gradient';
import DirectionButtons from '../DirectionButtons';

// assets
import './app.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <NbColors />
      <RandomButtons />
      <Colors />
      <Gradient />
      <DirectionButtons />
    </div>
  );
}

// == Export
export default App;
