import React from 'react';

function NewVehicleForm(){
    return (
        <form className="group-form">
            <h3>Add new car</h3>
            <input className="form-control" type="text" placeholder="Model"/>
            <input className="form-control" type="text" placeholder="number" placeholder="Price"/>
            <input className="form-control" type="text" placeholder="number" placeholder="Year"/>
            <input type="image"  />
            <input type="submit"/>
        </form>
    )
}

export default NewVehicleForm;