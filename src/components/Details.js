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
            setYear(data.YOM);
            setImage(data.image);    
        }) 
    }, [])
    return (
        <div className="container">
            <center>
                <img src={image} style ={{height: 300 + "px", width: 500 + "px"}}/>
                <h3 >Name: {name}</h3>
                <h4>Price: {price}</h4>
                <h3>Manufacturer: {manufacturer}</h3>
                <h4>Year of Make: {year} | Brand New</h4>
            </center>
        </div>
    )
}

export default Details;