import React,{useEffect, useState} from 'react';

function NewVehicleForm({handleAddNewVehicle}){
    const [newVehicle, setNewVehicle] = useState({
        name: "",
        image: "",
        price: "",
        yom: "",
        manufacturer: "",
    })

    function handleChange(e) {
        setNewVehicle({...newVehicle,[e.target.name]: e.target.value})
    //console.log(newVehicle)
    }

    function handleSubmit(e){
        e.preventDefault()

        const vehicleObj  = {
            name: newVehicle.name,
            image: newVehicle.image, 
            price: newVehicle.price,
            YOM: newVehicle.yom,
            manufacturer: newVehicle.manufacturer

        }

            fetch("https://pacific-coast-19269.herokuapp.com/Cars/",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vehicleObj),
            })
            .then((res) => res.json())
            .then((newVehicle) => {
                handleAddNewVehicle(newVehicle);
            })
        }
    //}


    return (
        <div className="container form">
            <form onSubmit={handleSubmit}>
                <div className="group-form">
                    <h3>Post new car</h3>
                    <label for="Name" className="form-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name = "name"
                        value={newVehicle.name}
                        onChange={handleChange}
                        placeholder="Vehicle Name"/>
                </div>
                <div>
                    <label for="image" className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={NewVehicleForm.image}
                        onChange={handleChange}
                        placeholder="Enter image url here..."/>
                </div>
                <div>
                    <label for="price" className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value= {newVehicle.price}
                        onChange={handleChange}
                        placeholder="Price"/>
                </div>
                <div>
                    <label for="year" className="form-label">Year of Manufacture</label>
                    <input
                        className="form-control"
                        type= "text"
                        name="yom"
                        value={newVehicle.yom}
                        onChange={handleChange}
                        placeholder="yom"/>
                </div>
                <div>
                    <label for="manufacturer" className="form-label">Manufacturer</label>
                    <input
                        className="form-control"
                        type="text"
                        name="manufacturer"
                        value={newVehicle.manufacturer}
                        onChange={handleChange}
                        placeholder="Manufacturing company"/>
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