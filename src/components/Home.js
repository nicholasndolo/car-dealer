import React from 'react';
//import UpdateInfo from './UpdateInfo';
import Vehicle from './Vehicle';

function Home({vehicleList, setVehicleList}) {

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
    
     let vehicle = vehicleList.map((vehicle)=>(
         <Vehicle key={vehicle.id} onUpdatePrice={handleItemUpdate} vehicleList={vehicleList} setVehicleList={setVehicleList} carImage={vehicle.image} carName={vehicle.name} carPrice={vehicle.price} year={vehicle.year} carId={vehicle.id}/>
     ))

    return (
        <div className="container ">
            <h2>Featured Listings</h2>
            <div className="row">
            {vehicle}
            </div>
            <div>
            </div>
             
        </div>
    )
}

export default Home;