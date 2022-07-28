import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import NewVehicleForm from './components/NewVehicleForm';
import Home from './components/Home';

function App() {
  return (
    <div >
      <Router>
        <div>
          <NavBar/>
          <NewVehicleForm />
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
