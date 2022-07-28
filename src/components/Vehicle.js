import React from 'react';
import {Link} from 'react-router-dom'

function Vehicle({carName, carPrice, carImage, carId}){
    return (
      <div className="card" style={{width: 18 + 'rem'}}>
        <img src={carImage} className="card-img-top" alt={carImage} />
        <div className="card-body">
          <h5 className="card-title">{carName}</h5>
          <h5>Price:{carPrice}</h5>

          <Link to={"/vehicle/" + carId} className="btn btn-primary">View listing</Link>
        </div>
    </div>
    )
}

export default Vehicle;


