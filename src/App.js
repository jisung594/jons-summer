import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Home/Home.jsx';
import { Bio } from './Bio/Bio.jsx';
import { MiniUiKit } from './MiniUiKit/MiniUiKit.jsx';
import { Header } from './Header/Header.jsx';
import { Footer } from './Footer/Footer.jsx';
import styles from './App.module.css';


const AppContent = () => {
  const location = useLocation();
  const isMiniUiKitPage = location.pathname === '/mini-ui-kit';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      {/* Pass the boolean prop to the Header component */}
      <Header isMiniUiKitPage={isMiniUiKitPage} />

      <Routes>
        <Route path="/" element={<Home />} />
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
