import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import NewVehicleForm from './components/NewVehicleForm';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const [vehicleList, setVehicleList] = useState([])

    useEffect(()=> {
        fetch("https://pacific-coast-19269.herokuapp.com/Cars/")
        .then((res) => res.json())
        .then((data) => setVehicleList(data)) 
    }, [])
    
    function handleAddNewVehicle(newVehicle){
      setVehicleList([...vehicleList, newVehicle]);
    }

    function handleItemUpdate(updatedItem){
      const updatedVehicleList =vehicleList.map((vehicle) => {
        if(vehicle.id === updatedItem.id){
          return updatedItem
        }else{
          return vehicle
        }
      });
      setVehicleList(updatedVehicleList);
    }

  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route exact path="/" element={<Home vehicleList={vehicleList} setVehicleList={setVehicleList}/>}></Route>
          <Route exact path="/newvehicleform" element={<NewVehicleForm handleAddNewVehicle={handleAddNewVehicle}/>}></Route>
          <Route exact path="/vehicle/:carId" element={<Details  onUpdatedItem={handleItemUpdate}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
