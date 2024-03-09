import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

export default function UpdateChooses() {
    const { id } = useParams()
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [photo, setphoto] = useState('')


    const navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/chooses/getChooses.php?id=${id}`)
            .then((res) => {
                
                settitle(res.data.title)
                setcontent(res.data.content)
                setphoto(res.data.photo)
            })
    }, [])
    const SaveChooses = () => {
        const formdata = new FormData()

        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('photo', photo)
        formdata.append('id', id)

        axios.post("http://localhost/Node%20js/rakib5/Backend/chooses/updateChooses.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                settitle('')
                setcontent('')
                setphoto('')
                navi('/chooses/listchooses')
            })
    }
    return (
        <div className="container">
            <h1 className="bg-info text-center text-bold">Update Chooses</h1>

            <NavLink to={'/chooses/listchooses'} className="btn btn bg-info">Chooses List</NavLink><br />

            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>

                            <th>Title</th>
                            <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>

                            <th>Content</th>
                            <th colSpan={3}><textarea className='form-control' onChange={(e) => setcontent(e.target.value)} value={content}></textarea></th>
                        </tr>
                        <tr>
                            <th>Photo</th>
                            <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>
                        </tr>

                        <tr>
                            <th colSpan={4}><button className="btn btn sm bg-success" onClick={SaveChooses}>Save</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}