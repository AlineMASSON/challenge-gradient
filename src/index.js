// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from 'src/components/App';
// store
import store from './store';

// == Render

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
