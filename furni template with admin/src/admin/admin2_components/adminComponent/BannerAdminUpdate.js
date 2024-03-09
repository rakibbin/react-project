import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'

export default function BannerAdminUpdate() {
    const {id}=useParams()
    const [photo, setphoto] = useState('')
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [btn1, setbtn1] = useState('')
    const [btn2, setbtn2] = useState('')
    

    const navi=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost/Node%20js/rakib5/Backend/banners/getBanner.php?id=${id}`)
        .then((res)=>{
            setphoto(res.data.photo)
            settitle(res.data.title)
            setcontent(res.data.content)
            setbtn1(res.data.btn1)
            setbtn2(res.data.btn2)
        })
    },[])
    const SaveBanner=()=>{
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('title',title)
        formdata.append('content',content)
        formdata.append('btn1',btn1)
        formdata.append('btn2',btn2)
        
        formdata.append('id',id)

        axios.post("http://localhost/Node%20js/rakib5/Backend/banners/updateBanner.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res) => {
            console.log(res.data)
            setphoto('')
            settitle('')
            setcontent('')
            setbtn1('')
            setbtn2('')
            navi('/banner/listbanner')
        })
    }

  return (
    

    <>
    <Admin2_asidebar />
    <div className="content">
      <Admin2_nav />
      <main>
        <div className=" card card-body">



        <div className="container">
            <h1 className="bg-info text-center text-bold">Update Banners</h1>

            <NavLink to={'/admin/banner'} className="btn btn bg-info">Banners List</NavLink><br />

            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>

                            <th>Photo</th>
                            <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>

                            <th>Title</th>
                            <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <th colSpan={3}><textarea className='form-control' onChange={(e) => setcontent(e.target.value)} value={content}></textarea></th>
                        </tr>
                        <tr>
                            <th>Btn1</th>
                            <td><input type="text" className='form-control' onChange={(e) => setbtn1(e.target.value)} value={btn1} /></td>

                            <th>Btn2</th>
                            <td><input type="text" className='form-control' onChange={(e) => setbtn2(e.target.value)} value={btn2} /></td>
                        </tr>
                        <tr>
                            <th colSpan={4}><button className="btn btn sm bg-success" onClick={SaveBanner}>Save</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>






          
        </div>
      </main>
    </div>
  </>
  )
}
