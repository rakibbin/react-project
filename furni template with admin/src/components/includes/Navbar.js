import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    {/* Start Header/Navigation */}
  <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
      <NavLink to='/' className="navbar-brand" href="index.html">
        Furni<span>.</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <NavLink to='/' className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' className="nav-link">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className="nav-link">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to='/service' className="nav-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' className="nav-link">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className="nav-link">
              Contact us
            </NavLink>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <NavLink className="nav-link" href="#">
              <img src="images/user.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/chart' className="nav-link">
              <img src="images/cart.svg" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Header/Navigation */}
    </>
  )
}
