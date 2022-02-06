import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Languages from './pages/Languages'
import Translator from './pages/Translator';


const App = () => {
  return (
      <div>

          <Router>
          <Navbar /> 
              <Routes>

                <Route path='/' element={<HomePage />} />
                <Route path='/languages' element={<Languages />} />
                <Route path='/translator' element={<Translator />} />

              </Routes>
          <Footer />
          </Router>

      </div>
  )
};

export default App;
