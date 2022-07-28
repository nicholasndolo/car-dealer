import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import NewVehicleForm from './components/NewVehicleForm';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div >
      <Router>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/newvehicleform" element={<NewVehicleForm/>}></Route>
          <Route exact path="/vehicle/:carId" element={<Details/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
