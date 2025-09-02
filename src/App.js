import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Bio } from './Bio/Bio.jsx';
import { MiniUiKit } from './MiniUiKit/MiniUiKit.jsx';
import { Header } from './Header/Header.jsx';
import { Footer } from './Footer/Footer.jsx';
import styles from './App.module.css';


const AppContent = () => {
  // Get the current location object
  const location = useLocation();
  // Check if the current pathname is '/mini-ui-kit'
  const isMiniUiKitPage = location.pathname === '/mini-ui-kit';

  return (
    <div className="App">
      {/* Pass the boolean prop to the Header component */}
      <Header isMiniUiKitPage={isMiniUiKitPage} />

      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/mini-ui-kit" element={<MiniUiKit />} />
      </Routes>
      
      <Footer />
    </div>
  );
};


function App() {
  // // const [currentPage, setCurrentPage] = useState('home');
      
  // // Get the current location object
  // const location = useLocation();
  // // Check if the current pathname is '/mini-ui-kit'
  // const isMiniUiKitPage = location.pathname === '/mini-ui-kit';

  return (
      <BrowserRouter>
          <AppContent />
      </BrowserRouter>
  );
}

export default App;
