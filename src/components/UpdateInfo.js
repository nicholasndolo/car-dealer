import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom'


function UpdateInfo(){

    const [updatedInfo, setUpdatedInfo] = useState({
        image: "",
        price: "",  
    })

    let {carId} = useParams()

    function handleChange(e){
        setUpdatedInfo({...updatedInfo, [e.target.name]: e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault();
         

        const updatedObj = {
            image: updatedInfo.image,
            price: updatedInfo.price
        }

        fetch(`https://pacific-coast-19269.herokuapp.com/Cars/${carId}`,{
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(updatedObj),

         })
         .then((res) => res.json())
         .then((updatedDetails) => console.log(updatedDetails))
    }

    return (
        <div className="updateForm">
            <form onSubmit={handleSubmit}>
                    <h3>Update Information</h3>
                <div>
                    <label for="image" className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={updatedInfo.image}
                        onChange={handleChange}
                        placeholder="Enter image url here..."/>
                </div>
                <div>
                    <label for="price" className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value= {updatedInfo.price}
                        onChange={handleChange}
                        placeholder="Price"/>
                </div>
               <div>
               <input
                    className=" mt-4 btn btn-primary"type="submit"/>
               </div>
            </form>
        </div>
    )
}

export default UpdateInfo;

