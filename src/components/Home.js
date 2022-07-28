import React, {useEffect, useState} from 'react';
import Vehicle from './Vehicle';

function Home() {
    const [vehicleList, setVehicleList] = useState([])

    useEffect(()=> {
        fetch("https://pacific-coast-19269.herokuapp.com/Cars/")
        .then((res) => res.json())
        .then((data) => setVehicleList(data)) 
    }, [])
    let vehicle = vehicleList.map((vehicle)=>(
        <Vehicle key={vehicle.id} carImage={vehicle.image} carName={vehicle.name} carPrice={vehicle.price} year={vehicle.year} carId={vehicle.id}/>
    ))

    return (
        <div className="container">
            <h3>Featured Listings</h3>
            <div className="row">
            {vehicle}
            </div>
        </div>
    )
}

export default Home;