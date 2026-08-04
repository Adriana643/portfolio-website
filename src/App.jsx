import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
