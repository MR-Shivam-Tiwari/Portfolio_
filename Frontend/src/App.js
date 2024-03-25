import About from '../src/components/About'
import Blog from '../src/components/Blog'
import Home from './components/Home';
import Header from './layouts/Header';
import Services from './components/Services';
import Projects from './components/Projects';

import Contact from './components/Contact';
import ExpertAreas from './components/ExpertAreas';
import CopyRight from './layouts/CopyRight';
import Mouse from './layouts/Mouse';
import ProgressBar from './layouts/ProgressBar';
import MobileMenu from './layouts/MobileMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/globals.css'
function App() {
  return (
    <div className="App">
      <MobileMenu />
      <Header />
      <Home />
      <About />
      <ExpertAreas />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </div>
  );
}

export default App;
