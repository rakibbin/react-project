import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddBlog() {
    const [photo, setphoto] = useState('')
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const navi=useNavigate()

    const SaveBlog = () => {
        const formdata = new FormData()
        formdata.append('photo', photo)
        formdata.append('title', title)
        formdata.append('date', date)

        axios.post("http://localhost/Node%20js/rakib5/Backend/blogs/addBlog.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setphoto('')
                settitle('')
                setdate('')
                navi('/blog/listblog')
            })
    }

    return (
        <div className="container">
            <h1 className="bg-info text-center text-bold">Add Blogs</h1>

            <NavLink to={'/blog/listblog'} className="btn btn bg-info">Blogs List</NavLink><br />

            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>

                            <th>Photo</th>
                            <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>

                            <th>title</th>
                            <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <td><input type="text" className='form-control' onChange={(e) => setdate(e.target.value)} value={date} /></td>
                        </tr>
                        
                        <tr>
                            <th colSpan={4}><button className="btn btn sm bg-success" onClick={SaveBlog}>Save</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}