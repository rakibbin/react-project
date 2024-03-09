import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Main_card from '../Main_card'
import Admin2_nav from '../Admin2_nav'
import BannerAdminList from './BannerAdminList'

export default function Listtable() {
  return (
    <>

    <Admin2_asidebar/>
   <div className="content">
       <Admin2_nav/>


       <BannerAdminList/>


     </div>
   </>
  )
}
