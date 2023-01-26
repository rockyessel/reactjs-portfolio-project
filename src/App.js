import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/index';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
