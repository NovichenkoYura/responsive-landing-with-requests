import './App.css';
import { FrontView } from './components/FrontView/FrontView';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FrontView />
    </div>
  );
}

export default App;
