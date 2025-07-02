import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/homepage/Header';
import About from './components/homepage/About';
import Modules from './components/homepage/Modules';
import Collaborative from './components/pages/Collaborative';
import DataCleaning from './components/pages/DataCleaning';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#2c3968] min-h-screen text-white">
       <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Modules />
            </>
          }
        />

        {/* Static module pages */}
        <Route path="/collaborative-discussion" element={<Collaborative />} />
        <Route path="/data-cleaning" element={<DataCleaning />} />
      </Routes>
    </div>
  );
}

export default App;
