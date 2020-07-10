import React from 'react';

import './App.css';
import Layout from './component/layout/layout'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Layout/>
  </BrowserRouter>
    </div>
  );
}

export default App;
