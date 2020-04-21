import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import { BrowserRouter as Router } from 'react-router-dom';

import { Link } from 'react-router-dom';

import WarehouseState from './context/warehouse/WarehouseState';

function App() {
  return (
    <WarehouseState>
      <Router>
        <div className='App'>
          <Navbar />
          <Alert />
          <div className='container'>
            <Main />
          </div>
          <div className='fixed-action-btn'>
            <Link to='/products/create' className='btn-floating btn-large teal'>
              <i className='fa fa-plus'></i>
            </Link>
          </div>
        </div>
      </Router>
    </WarehouseState>
  );
}

export default App;
