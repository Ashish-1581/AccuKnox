import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Components/Dashboard';

import Nav from './Components/Nav';

function App() {
  return (
    <Provider store={store}>
      <div style={{background:"#f3f8fb",height:"100vh",overflow:"auto"}} className="App">
        <Nav />
      
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;