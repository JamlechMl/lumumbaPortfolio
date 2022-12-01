import About from './components/About';
import Contact from './components/Contact';
import Documents from './components/Documents';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Dance from './components/Dance';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Dance />
      <Skills />
      <Documents />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
