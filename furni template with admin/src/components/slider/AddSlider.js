import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddDesignation() {
    
    
    const [content, setcontent] = useState('')
    const [photo, setphoto] = useState('')
    const [name, setname] = useState('')
    const [designation, setdesignation] = useState('')
    const navi = useNavigate()

    const SaveDesignation = () => {
        const formdata = new FormData()
        
        formdata.append('content', content)
        formdata.append('photo', photo)
        formdata.append('name', name)
        formdata.append('designation', designation)
        axios.post("http://localhost/Node%20js/rakib5/Backend/testimonials/addSlider.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                
                setcontent('')
                setphoto('')
                setname('')
                setdesignation('')
                navi('/designation/listdesignation')
            })
    }

    return (
        <div className="container">
            <h1 className="bg-info text-center text-bold">Add Designation</h1>

            <NavLink to={'/designation/listdesignation'} className="btn btn bg-info">Designation List</NavLink><br />

            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <th>Content</th>
                            <th colSpan={3}><textarea className='form-control' onChange={(e) => setcontent(e.target.value)} value={content}></textarea></th>

                            <th>Photo</th>
                            <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>
                        </tr>
                        <tr>
                        <th>Name</th>
                            <td><input type="text" className='form-control' onChange={(e) => setname(e.target.value)} value={name} /></td>

                            <th>designation</th>
                            <td><input type="text" className='form-control' onChange={(e) => setdesignation(e.target.value)} value={designation} /></td>

                        </tr>

                        <tr>
                            <th colSpan={4}><button className="btn btn sm bg-success" onClick={SaveDesignation}>Save</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}