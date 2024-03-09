import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin2_asidebar() {

const active_ie=()=>{

  const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

  sideLinks.forEach(item => {
      const li = item.parentElement;
      item.addEventListener('click', () => {
          sideLinks.forEach(i => {
              i.parentElement.classList.remove('active');
          })
          li.classList.add('active');
      })
  })};
  
  
  
  return (
    <>
    
    <div className="sidebar" onClick={active_ie}>
    <a href="#" className="logo">
      <i className="bx bx-code-alt" />
      <div className="logo-name">
        <span>Red</span>Helal
      </div>
    </a>
    <ul className="side-menu">
      <li className="active">
        <a href="#">
          <i className="bx bxs-dashboard" />
          <NavLink to='/admin'>Dashboard </NavLink>

        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-store-alt" />
          <NavLink to='/admin/banner'>Banner </NavLink>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-analyse" />
          Analytics
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-message-square-dots" />
          Tickets
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-group" />
          Users
        </a>
      </li>
      <li>
        <a href="#">
         
          <i className="bx bx-group" />

          <NavLink to='/admin/list'>Table list</NavLink>
          
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          Settings
        </a>
      </li>
    </ul>
    <ul className="side-menu">
      <li>
        <a href="#" className="logout">
          <i className="bx bx-log-out-circle" />
          Logout
        </a>
      </li>
    </ul>
  </div>
    </>
  )
}
