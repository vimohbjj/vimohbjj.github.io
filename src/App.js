import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import { Provider } from 'react-redux';
import { useState } from 'react'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>    
    </Provider>
  );
}

export default App;
