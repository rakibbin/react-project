import React from 'react'

export default function Main_card() {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Analytics</a>
            </li>
            /
            <li>
              <a href="#" className="active">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="report">
          <i className="bx bx-cloud-download" />
          <span>Download PDF</span>
        </a>
      </div>
      {/* Insights */}
      <ul className="insights">
        <li>
          <i className="bx bx-calendar-check" />
          <span className="info">
            <h3>1,074</h3>
            <p>Paid Order</p>
          </span>
        </li>
        <li>
          <i className="bx bx-show-alt" />
          <span className="info">
            <h3>3,944</h3>
            <p>Site Visit</p>
          </span>
        </li>
        <li>
          <i className="bx bx-line-chart" />
          <span className="info">
            <h3>14,721</h3>
            <p>Searches</p>
          </span>
        </li>
        <li>
          <i className="bx bx-dollar-circle" />
          <span className="info">
            <h3>$6,742</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      {/* End of Insights */}
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-receipt" />
            <h3>Recent Orders</h3>
            <i className="bx bx-filter" />
            <i className="bx bx-search" />
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="images/profile-1.jpg" />
                  <p>John Doe</p>
                </td>
                <td>14-08-2023</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="images/profile-1.jpg" />
                  <p>John Doe</p>
                </td>
                <td>14-08-2023</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="images/profile-1.jpg" />
                  <p>John Doe</p>
                </td>
                <td>14-08-2023</td>
                <td>
                  <span className="status process">Processing</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Reminders */}
        <div className="reminders">
          <div className="header">
            <i className="bx bx-note" />
            <h3>Remiders</h3>
            <i className="bx bx-filter" />
            <i className="bx bx-plus" />
          </div>
          <ul className="task-list">
            <li className="completed">
              <div className="task-title">
                <i className="bx bx-check-circle" />
                <p>Start Our Meeting</p>
              </div>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <div className="task-title">
                <i className="bx bx-check-circle" />
                <p>Analyse Our Site</p>
              </div>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <div className="task-title">
                <i className="bx bx-x-circle" />
                <p>Play Footbal</p>
              </div>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
          </ul>
        </div>
        {/* End of Reminders*/}
      </div>
    </main>
  )
}
