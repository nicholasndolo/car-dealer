import React from 'react';
import {Link} from 'react-router-dom'

function Vehicle({carName, carPrice, carImage, carId, vehicleList, setVehicleList}){

  function handleDelete(){
    fetch(`https://pacific-coast-19269.herokuapp.com/Cars/${carId}`,{
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(()=>{
    setVehicleList(vehicleList.filter(item => item.id !== carId))
    
    })
  }
    return (
      <div className="card" style={{width: 18 + 'rem'}}>
        <img src={carImage} className="card-img-top" alt={carImage} />
        <div className="card-body">
          <h5 className="card-title">{carName}</h5>
          <h5>Price:{carPrice}</h5>

          <Link to={"/vehicle/" + carId} className="btn btn-primary">View listing</Link>
          <button className="btn btn-warning mt-1" onClick={handleDelete}>Delete</button>
        </div>
    </div>
    )
}

export default Vehicle;


