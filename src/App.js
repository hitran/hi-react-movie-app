import React from 'react';
import NavBar from './NavBar/NavBar.jsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import Canvas from './Canvas/Canvas';
import Context from './Context/Context';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Context>
          <NavBar />
          <Canvas>
            <Router />
          </Canvas>
        </Context>
      </div>
    </BrowserRouter>
  );
}

export default App;
