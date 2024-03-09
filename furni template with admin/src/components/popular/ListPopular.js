import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListPopular() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/Node%20js/rakib5/Backend/populars/listPopular.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/populars/deletePopular.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/Node%20js/rakib5/Backend/populars/listPopular.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <div>
                <h1 className="bg-info text-center text-bold">Populars List</h1>

                <NavLink to={'/popular/addpopular'} className="btn btn bg-info">Add New</NavLink><br />
            </div>
            <div>
                <table className='table table-bordered' >
                    <thead className=' bg-secondary text-white text-center font-weight-bold'>
                        <tr>
                            <th>SL</th>
                            <th>Photo</th>
                            <th>Name</th>
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
                                    <td><img src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo}`} alt={d.name} height={100} /></td>
                                    <td>{d.name}</td>
                                    <td>{d.content}</td>
                                    <td>{d.btn}</td>
                                    <td className='d-sm-inline-flex'>
                                        
                                        <NavLink to={`/popular/updatepopular/${d.id}`} className='btn btn-info'>Update</NavLink>
                                        

                                        <button className='btn btn-xs btn-warning' onClick={() => deletNews(d.id)}>Delete</button>
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