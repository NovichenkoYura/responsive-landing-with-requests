import './App.scss';
// import { DemoCards } from './components/DemoCards/DemoCards';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import { Service } from './components/Service/Service';
import { Features } from './components/Features/Features';
import { FunFacts } from './components/FunFacts/FunFacts';
import { Pricing } from './components/Pricing/Pricing';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.onscroll = (e) => {
      console.log(e);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <Features />
      <FunFacts />
      <Pricing />
      {/* <DemoCards /> */}
      <Footer />
    </div>
  );
}

export default App;
