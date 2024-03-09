import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListProducts2() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/Node%20js/rakib5/Backend/product2/listProduct.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/product2/deleteProduct.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/Node%20js/rakib5/Backend/product2/listProduct.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <div>
                <h1 className="bg-info text-center text-bold">Products2 List</h1>

                <NavLink to={'/products2/addproducts2'} className="btn btn bg-info">Add New</NavLink><br />
            </div>
            <div>
                <table className='table table-bordered' >
                    <thead className=' bg-secondary text-white text-center font-weight-bold'>
                        <tr>
                            <th>SL</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-light'>
                        {data.map((d, i) => {
                            return (
                                <tr key={i}>
                                    
                                    
                                    <td>{i + 1}</td>
                                    <td><img src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo}`} alt={d.name} height={100} /></td>
                                    <td>{d.name}</td>
                                    <td>{d.price}</td>
                                    <td className='d-sm-inline-flex'>
                                        
                                        <NavLink to={`/products2/updateproducts2/${d.id}`} className='btn bg-info'>Update</NavLink>
                                        

                                        <button className='btn xs bg-warning' onClick={() => deletNews(d.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}