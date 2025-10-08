// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import '../userdashborad/dashboard.css'
// const Dashborad = () => {
//    const [fetcheddata,setFetcheddata]=useState([])
//   const [uniqueid,setUniqueid]=useState()
//   const [fetched_email,setFetchedemail]=useState()
//   // const [fetched_img,setFetchedimg]=useState()
// useEffect(()=>{
//  async function FetchProfile(){
// const res=await axios.post("http://localhost:3000/fetch/profile",{},{
//   withCredentials:true
// })
// const user_data = res.data.profile
// setFetcheddata(user_data)
// setUniqueid(user_data.user_uuid)
// setFetchedemail(user_data.user_email)
// // setFetchedimg(user_data.user_img)
//   }
//   FetchProfile();
// }, [])

//   return (
//     <div>
//    <p>{fetched_email}</p>
//    <p>{uniqueid}</p>


//     </div>
//   )
// }

// export default Dashborad

import React, { useState } from 'react';
import { Plus, Copy, MoreVertical } from 'lucide-react';
import '../userdashborad/dashboard.css'
import Logo from "../assets/byndlogo.svg"
import Addsymbol from "../assets/addsymbol.svg"
import Dashsymbol from "../assets/dashsymbol.svg"
import Analytics from "../assets/Analytics.svg"
import Notification from "../assets/sidenotification.svg"
import Search from "../assets/search.svg"
import Activesubmision from "../assets/activesubmission.svg"
import Availableslots from "../assets/available slots.svg"
import Counts from "../assets/count.svg"
import Lastviewed from "../assets/lastviewed.svg"
import Upgradetopro from "../assets/upgradetopro.svg"
export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const submissions = [
    {
      id: 1,
      company: 'Tech Corp',
      position: 'Product Design Intern',
      submitted: '26/07/2025',
      status: 'viewed'
    },
    {
      id: 2,
      company: 'Catapult Organisation',
      position: 'UI UX Designer',
      submitted: '28/08/2025',
      status: 'viewed'
    },
    {
      id: 3,
      company: 'Zodiac Agency',
      position: 'Senior Product Designer',
      submitted: '30/08/2025',
      status: 'pending'
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img className="logo-te" src={Logo} alt='logo'></img>
        </div>

        <nav className="nav-menu">
          <div className="nav-section">
            <p className="nav-label">MAIN</p>
            <button 
              className={`nav-item ${activeMenu === 'new' ? 'active' : ''}`}
              onClick={() => setActiveMenu('new')}
            >
              <img className="nav-images"src={Addsymbol} alt='+'></img>
              <span>New Design Submission</span>
            </button>
            <button 
              className={`nav-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveMenu('dashboard')}
            >
<img className="nav-imagess"src={Dashsymbol} alt='grid'></img>
              <span>Dashboard</span>
            </button>
          </div>

          <div className="nav-section">
            <p className="nav-label">PRO</p>
            <button 
              className={`nav-item ${activeMenu === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveMenu('analytics')}
            >
           <img className="nav-imagess"src={Analytics} alt='Analytics'></img>
              <span>Analytics</span>
            </button>
            <button 
              className={`nav-item ${activeMenu === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveMenu('notifications')}
            >
            <img  className= "nav-images"src={Notification} alt="nNotification" />
              <span>Notifications</span>
            </button>
          </div>
        </nav>

        {/* Pro Upgrade Card */}
        <div className="pro-card">
          <p className="pro-text">Get real-time insights, alerts & unlimited submissions — free for 14 days</p>
          <button className="pro-btn">Upgrade to Pro</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-bar">
            <img  className='search'src={Search} alt='search'></img>
            <input type="text" placeholder="Search assignments" />
          </div>
          <button className="new-submission-btn">
            <Plus size={18} />
            <span>New submission</span>
          </button>
          <div className="profile-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="Profile" />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
             <img src={Activesubmision} alt="Availableslots" />
            </div>
            <p className="stat-label">Active submissions</p>
            <h2 className="stat-value">3</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
             <img src={Availableslots} alt='Availableslots'></img>
            </div>
            <p className="stat-label">Available slots</p>
            <h2 className="stat-value">0</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
             <img src={Counts} alt='count'></img>
            </div>
            <p className="stat-label">Total assignments viewed</p>
            <h2 className="stat-value">1</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon-last">
             <img src={Lastviewed} alt='lastviewed'></img>
            </div>
            <p className="stat-label">Last assignment viewed</p>
            <h2 className="stat-value">Zodiac Agency</h2>
          </div>
        </div>

        {/* Pro Banner */}
        <div className="pro-banner">
          <div className="pro-banner-content">
            <h3>Unlock powerful insights and notifications to stand out — upgrade to Pro and enjoy a 14-day <strong>free trial </strong>today.</h3>
            <button className="upgrade-btn">
              <span className="rocket-icon">🚀</span>
              Upgrade to Pro
            </button>
            <p className="no-credit">No credit card required</p>
          </div>
          <div className="pro-banner-illustration">
            <img src={Upgradetopro} alt="Analytics" />
          </div>
        </div>

        {/* Submissions Table */}
        <div className="submissions-section">
          <h2 className="section-title">Design Submissions</h2>
          
          <div className="table-container">
            <table className="submissions-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Company name</th>
                  <th>Position</th>
                  <th>Submitted on</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id}>
                    <td>{sub.id}</td>
                    <td className="company-name">{sub.company}</td>
                    <td>{sub.position}</td>
                    <td>{sub.submitted}</td>
                    <td>
                      <span className={`status-badge ${sub.status}`}>
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn">
                          <Copy size={16} />
                          <span>Copy BYND Link</span>
                        </button>
                        <button className="more-btn">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      </div>
      )}