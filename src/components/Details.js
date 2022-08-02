import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import UpdateInfo from './UpdateInfo';

function Details({onUpdatedItem}){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [manufacturer ,setManufacturer] = useState("")
    const [year, setYear] = useState("")
    const [reviews, setReviews] = useState([""])

    let {carId} = useParams()

    useEffect(()=> {
        fetch(`https://pacific-coast-19269.herokuapp.com/Cars/${carId}`)
        .then((res) => res.json())
        .then((data) => {

            setName(data.name);
            setPrice(data.price);
            setManufacturer(data.manufacturer);
            setYear(data.YOM);
            setImage(data.image); 
            setReviews(data.reviews);
              

        }) 
    }, [])


 
    return (
        <div className="container">
            <UpdateInfo onUpdatedItem={onUpdatedItem} />
            <center>
                <img src={image} style ={{height: 300 + "px", width: 500 + "px"}}/>
                <h3 >Name: {name}</h3>
                <h4>Price: {price}</h4>
                <h3>Manufacturer: {manufacturer}</h3>
                <h4>Year of Make: {year} | Brand New</h4>
            </center>
            <h3>Customer reviews</h3>
            <div>
                {/* <ul>{reviews?reviews.map((review) =>
                    <li key={review}> {reviews} </li>): "No reviews"}
                </ul>
             */}
             <ul>
                 <li>{reviews[0]}</li>
                 <li>{reviews[1]}</li>
                 <li>{reviews[2]}</li>
                 <li>{reviews[3]}</li>
             </ul>

            </div>
        </div>
    )
}

export default Details;