import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListDesign() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/Node%20js/rakib5/Backend/design/listDesign.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/design/deleteDesign.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/Node%20js/rakib5/Backend/design/listDesign.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <div>
                <h1 className="bg-info text-center text-bold">Design List</h1>

                <NavLink to={'/design/adddesign'} className="btn btn bg-info">Add New</NavLink><br />
            </div>
            <div>
                <table className='table table-bordered' >
                    <thead className=' bg-secondary text-white text-center font-weight-bold'>
                        <tr>
                            <th>SL</th>
                            <th>photo1</th>
                            <th>Photo2</th>
                            <th>Photo3</th>
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
                                    <td><img src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo1}`} alt={d.title} height={100} /></td>
                                    <td><img src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo2}`} alt={d.title} height={100} /></td>
                                    <td><img src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo3}`} alt={d.title} height={100} /></td>
                                    <td>{d.title}</td>
                                    <td>{d.content}</td>
                                    <td>{d.btn}</td>
                                    
                                    
                                    <td className='d-sm-inline-flex'>
                                        
                                        <NavLink to={`/design/updatedesign/${d.id}`} className='btn bg-info'>Update</NavLink>
                                        

                                        <button className='btn  bg-warning' onClick={() => deletNews(d.id)}>Delete</button>
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