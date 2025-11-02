import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import { ToastContainer } from 'react-toastify';
import store from './store/store';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      });
    });

    const animationElements = document.querySelectorAll('.animation');
    animationElements.forEach(element => observer.observe(element));

  }, []);

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
