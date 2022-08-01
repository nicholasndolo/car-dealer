import React from 'react';
//import UpdateInfo from './UpdateInfo';
import Vehicle from './Vehicle';

function Home({vehicleList, setVehicleList}) {
    
     let vehicle = vehicleList.map((vehicle)=>(
         <Vehicle key={vehicle.id} vehicleList={vehicleList} setVehicleList={setVehicleList} carImage={vehicle.image} carName={vehicle.name} carPrice={vehicle.price} year={vehicle.year} carId={vehicle.id}/>
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