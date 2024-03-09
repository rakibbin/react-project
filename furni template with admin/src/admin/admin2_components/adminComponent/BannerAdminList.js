import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function BannerAdminList() {


  const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/Node%20js/rakib5/Backend/banners/listBanner.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/Node%20js/rakib5/Backend/banners/deleteBanner.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/Node%20js/rakib5/Backend/banners/listBanner.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
      <main>
        <div className='card card-body'>
                  <div>
                      <h1 className="bg-info text-center text-bold">Banners List</h1>
      
                      <NavLink to={'/admin/addbanner'} className="btn btn bg-info">Add New</NavLink><br />
                  </div>
                  <div>
                      <table className='table table-bordered' >
                          <thead className=' bg-secondary text-white text-center font-weight-bold'>
                              <tr>
                                  <th>SL</th>
                                  <th>Photo</th>
                                  <th>Title</th>
                                  <th>Content</th>
                                  <th>Btn1</th>
                                  <th>Btn2</th>
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
                                          <td>{d.content}</td>
                                          <td>{d.btn1}</td>
                                          <td>{d.btn2}</td>
                                          <td className='d-sm-inline-flex'>
                                              
                                              <NavLink to={`/admin/updatebanner/${d.id}`} className='btn btn-info'>Update</NavLink>
                                              
      
                                              <button className='btn btn-xs btn-warning' onClick={() => deletNews(d.id)}>Delete</button>
                                          </td>
                                      </tr>
                                  )
                              })}
                          </tbody>
                      </table>
                  </div>
              </div>
      </main>
              
          )
}
