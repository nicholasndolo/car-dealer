import React, {useState} from 'react';

function Details(){
    const [image, setImage] = useState("")
    return (
        <div>
            <center>
                <img style ={{height: 200 + "px", width: 200 + "px"}}/>
            </center>
        </div>
    )
}

export default Details;