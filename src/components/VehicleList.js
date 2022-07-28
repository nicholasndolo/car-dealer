import React, {useEffect, useState} from 'react';
import Vehicle from './Vehicle';

function VehicleList() {
    const [vehicleList, setVehicleList] = useState([])

    useEffect(()=> {
        fetch("https://pacific-coast-19269.herokuapp.com/Cars/")
        .then((res) => res.json())
        .then((data) => setVehicleList(data)) 
    }, [])
    console.log(VehicleList)
    return (
        <div>
            <h3>Featured Listings</h3>
            {vehicleList.map((vehicle)=>(
                <Vehicle key={vehicle.id} carImage={vehicle.image} carName={vehicle.name} carPrice={vehicle.price} year={vehicle.year} carId={vehicleList.id}/>
            ))}
            <Vehicle />
        </div>
    )
}

export default VehicleList;