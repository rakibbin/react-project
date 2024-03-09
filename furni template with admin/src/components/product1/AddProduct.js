import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddProduct() {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [btn, setbtn] = useState('')
    const navi = useNavigate()

    const SaveProduct = () => {
        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('btn', btn)

        axios.post("http://localhost/Node%20js/rakib5/Backend/product1/addProduct.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                settitle('')
                setcontent('')
                setbtn('')
                navi('/product/listproduct')
            })
    }

    return (
        <div className="container">
            <h1 className="bg-info text-center text-bold">Add Products</h1>

            <NavLink to={'/product/listproduct'} className="btn btn bg-info">Products List</NavLink><br />

            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <th>title</th>
                            <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>

                            <th>Content</th>
                            <td><input type="textarea" className='form-control' onChange={(e) => setcontent(e.target.value)} value={content} /></td>

                            <th>Btn</th>
                            <td><input type="text" className='form-control' onChange={(e) => setbtn(e.target.value)} value={btn} /></td>
                        </tr>
                        

                        <tr>
                            <th colSpan={4}><button className="btn btn sm bg-success" onClick={SaveProduct}>Save</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}