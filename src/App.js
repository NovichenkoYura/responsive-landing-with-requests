import './App.css';
import { DemoCards } from './components/DemoCards/DemoCards';
import { FrontView } from './components/FrontView/FrontView';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FrontView />
      <DemoCards />
    </div>
  );
}

export default App;
