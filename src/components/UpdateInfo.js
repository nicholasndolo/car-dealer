import React from 'react'; 

function UpdateInfo(){
    return (
        <div className="container">
            <form >
            {/* <form onSubmit={handleSubmit}> */}
                <div className="group-form">
                    <h3>Update Information</h3>
                    <label for="Name" className="form-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name = "name"
                        value="0"
                        //onChange={handleChange}
                        placeholder="Vehicle Name"/>
                </div>
                <div>
                    <label for="image" className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value="0"
                        // onChange={handleChange}
                        placeholder="Enter image url here..."/>
                </div>
                <div>
                    <label for="price" className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value= "0"
                        // onChange={handleChange}
                        placeholder="Price"/>
                </div>
                <div>
                    <label for="year" className="form-label">Year of Manufacture</label>
                    <input
                        className="form-control"
                        type= "text"
                        name="yom"
                        value="0"
                        // onChange={handleChange}
                        placeholder="yom"/>
                </div>
                <div>
                    <label for="manufacturer" className="form-label">Manufacturer</label>
                    <input
                        className="form-control"
                        type="text"
                        name="manufacturer"
                        value="0"
                        // onChange={handleChange}
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

export default UpdateInfo;

