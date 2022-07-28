import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar';
import NewVehicleForm from './components/NewVehicleForm';
import Vehicle from './components/VehicleList';

function App() {
  return (
    <div >
      <Router>
        <NavBar/>
        <NewVehicleForm />
        <Vehicle />
      </Router>
    </div>
  );
}

export default App;
