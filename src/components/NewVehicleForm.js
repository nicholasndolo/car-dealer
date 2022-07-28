import React from 'react';

function NewVehicleForm(){
    return (
        <div className="container">
            <form >
                <div className="group-form">
                    <h3>Post new car</h3>
                    <label for="Name" className="form-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Vehicle Name"/>
                </div>
                <div>
                    <label for="image" className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter image url here..."/>
                </div>
                <div>
                    <label for="price" className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Price"/>
                </div>
                <div>
                    <label for="year" className="form-label">Year of Manufacture</label>
                    <input
                        className="form-control"
                        type="number"
                        placeholder="YOM"/>
                </div>
               <div>
               <input
                    className=" mt-4 btn btn-primary"type="submit"/>
               </div>
        </form>
        </div>
        
    )
}

export default NewVehicleForm;