import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListBlog() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/Node%20js/rakib5/Backend/blogs/listBlog.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/blogs/deleteBlog.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/Node%20js/rakib5/Backend/blogs/listBlog.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <div>
                <h1 className="bg-info text-center text-bold">Blogs List</h1>

                <NavLink to={'/blog/addblog'} className="btn btn bg-info">Add New</NavLink><br />
            </div>

            <table className='table table-bordered' >
                <thead className=' bg-secondary text-white text-center font-weight-bold'>
                    <tr>
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-light'>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>


                                <td>{i + 1}</td>
                                <td><img src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo}`} alt={d.title} height={100} /></td>
                                <td>{d.title}</td>
                                <td>{d.date}</td>
                                <td className='d-sm-inline-flex'>

                                    <NavLink to={`/blog/updateblog/${d.id}`} className='btn xm bg-info'>Update</NavLink>


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