import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Rotas from './rotas';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover  
            theme="dark"
          />
    <Rotas/>
  </React.StrictMode>
);

