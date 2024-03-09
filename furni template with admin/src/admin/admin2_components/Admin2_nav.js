import React from 'react'


export default function Admin2_nav() {
  
  const handleClick = () => {
    // 👇️ add class to the body element
    document.body.classList.toggle('dark');
  };
      
  const handleSize = () => {
    const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');
    const menuBar = document.querySelector('.content nav .bx.bx-menu');
    const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})};




//   const handleClick = () => {
//   const toggler = document.getElementById('theme-toggle');

// toggler.addEventListener('change', function () {
//     if (this.checked) {
//         document.body.classList.add('dark');
//     } else {
//         document.body.classList.remove('dark');
//     }
// })};
  
  return (
    <>
    
    {/* Navbar */}
    <nav>
      <i className="bx bx-menu" onClick={handleSize} />
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button className="search-btn" type="submit">
            <i className="bx bx-search" />
          </button>
        </div>
      </form>
      <input type="checkbox" id="theme-toggle" onClick={handleClick}/>
      <label htmlFor="theme-toggle" className="theme-toggle" />
      <a href="#" className="notif">
        <i className="bx bx-bell" />
        <span className="count">12</span>
      </a>
      <a href="#" className="profile">
        <img src="images/logo.png" />
      </a>
    </nav>
    {/* End of Navbar */}
    

    </>
  )
}
