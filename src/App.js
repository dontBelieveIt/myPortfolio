import './App.scss';

import { Timeline } from './components/Timeline/Timeline';
import { ToggleMenu } from './components/ToggleMenu/ToggleMenu';
import { Page } from './Page/Page';

function App() {
  return (
    <div className="App">
      <ToggleMenu />
      <Page />
    </div>
  );
}

export default App;
