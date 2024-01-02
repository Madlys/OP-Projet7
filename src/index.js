import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/LogementSheet/LogementSheet';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
