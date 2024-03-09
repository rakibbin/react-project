import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddProducts2() {
    const [photo, setphoto] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const navi=useNavigate()

    const SaveProducts2 = () => {
        const formdata = new FormData()
        formdata.append('photo', photo)
        formdata.append('name', name)
        formdata.append('price', price)

        axios.post("http://localhost/Node%20js/rakib5/Backend/product2/addProduct.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setphoto('')
                setname('')
                setprice('')
                navi('/products2/listproducts2')
            })
    }

    return (
        <div className="container">
            <h1 className="bg-info text-center text-bold">Add Products2</h1>

            <NavLink to={'/products2/listproducts2'} className="btn btn bg-info">Products2 List</NavLink><br />

            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>

                            <th>Photo</th>
                            <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>

                            <th>Name</th>
                            <td><input type="text" className='form-control' onChange={(e) => setname(e.target.value)} value={name} /></td>
                        </tr>
                        <tr>
                        <th>Price</th>
                            <td><input type="text" className='form-control' onChange={(e) => setprice(e.target.value)} value={price} /></td>
                        </tr>
                       
                        <tr>
                            <th colSpan={4}><button className="btn btn sm bg-success" onClick={SaveProducts2}>Save</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}