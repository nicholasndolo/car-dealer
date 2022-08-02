import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom'


function UpdateInfo({onUpdatedItem}){

    const [updatedPrice, setUpdatedPrice] = useState({
        price: "",  
    })

    let {carId} = useParams()

    function handleChange(e){
        setUpdatedPrice({...updatedPrice, [e.target.name]: e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault();
         

        const updatedObj = {

            price: updatedPrice.price
        }

        fetch(`https://pacific-coast-19269.herokuapp.com/Cars/${carId}`,{
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(updatedObj),

         })
         .then((res) => res.json())
         .then((updatedItem) => onUpdatedItem(updatedItem))
    }

    return (
        <div className="updateForm">
            <form onSubmit={handleSubmit}>
                    <h3>Update Price</h3>
                <div>
                    <label for="price" className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value= {updatedPrice.price}
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

