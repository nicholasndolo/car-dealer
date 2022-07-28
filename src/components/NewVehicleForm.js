import React from 'react';

function NewVehicleForm(){
    return (
        <form >
            <div className="group-form">
            <h3>Add new car</h3>
            <input
                className="form-control"
                type="text"
                placeholder="Model"/>
            <input
                className="form-control"
                type="text"
                placeholder="Price"/>
            <input
                className="form-control"
                type="text"
                placeholder="Year"/>
            <input
                className="btn btn-primary"type="submit"/>
            </div>
        </form>
    )
}

export default NewVehicleForm;