import './App.css';
// import { DemoCards } from './components/DemoCards/DemoCards';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import { Service } from './components/Service/Service';
import { Features } from './components/Features/Features';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <Features />
      {/* <DemoCards /> */}
    </div>
  );
}

export default App;
