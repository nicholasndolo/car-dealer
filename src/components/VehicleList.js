import React, {useEffect} from 'react';
import Vihicle from './Vihicle';

function VehicleList(){
    const [vehicleList, setVehicleList] = useEffect([])

    useEffect(()=> {
        fetch("https://pacific-coast-19269.herokuapp.com/Cars/")
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, [])
    return (
        <div>
            {vehicleList.map((vehicle)=>(
                <Vihicle key={vehicle.id} name={vehicle.name} price={vehicle.price} year={vehicle.year}/>
            ))}
        </div>
    )
}

export default VehicleList;