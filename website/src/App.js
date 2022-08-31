import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
    <Navigation />
     <Header />
     <About />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;
