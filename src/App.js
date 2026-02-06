import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { About } from './About/About.jsx';
import { Home } from './Home/Home.jsx';
import { Bio } from './Bio/Bio.jsx';
import { MiniUiKit } from './MiniUiKit/MiniUiKit.jsx';
import { Header } from './Header/Header.jsx';
import { Footer } from './Footer/Footer.jsx';


const AppContent = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header currentLocation={currentLocation} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/2025" element={<Bio />} />
        <Route path="/mini-ui-kit" element={<MiniUiKit />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
