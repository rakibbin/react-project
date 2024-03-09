import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListProduct() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/Node%20js/rakib5/Backend/product1/listProduct.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/product1/deleteProduct.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/Node%20js/rakib5/Backend/product1/listProduct.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <div>
                <h1 className="bg-info text-center text-bold">Update Product</h1>

                <NavLink to={'/product/addproduct'} className="btn btn bg-info">Add New</NavLink><br />
            </div>

            <table className='table table-bordered' >
                <thead className=' bg-secondary text-white text-center font-weight-bold'>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Btn</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-light'>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>


                                <td>{i + 1}</td>
                                <td>{d.title}</td>
                                <td>{d.content}</td>
                                <td>{d.btn}</td>
                                <td className='d-sm-inline-flex'>

                                    <NavLink to={`/product/updateproduct/${d.id}`} className='btn xm bg-info'>Update</NavLink>


                                    <button className='btn xm bg-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
} 