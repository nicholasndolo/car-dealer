import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function Details(){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [manufacturer ,setManufacturer] = useState("")
    const [year, setYear] = useState("")

    let {carId} = useParams()

    useEffect(()=> {
        fetch(`https://pacific-coast-19269.herokuapp.com/Cars/${carId}`)
        .then((res) => res.json())
        .then((data) => {

            setName(data.name);
            setPrice(data.price);
            setManufacturer(data.manufacturer);
            setYear(data.year);
            setImage(data.image);    
        }) 
    }, [])
    return (
        <div>
            <center>
                <h3>{name}</h3>
                <img src={image} style ={{height: 250 + "px", width: 500 + "px"}}/>
                <h4>{price}</h4>
                <h4>{manufacturer}</h4>
                <h4>{year}</h4>
            </center>
        </div>
    )
}

export default Details;