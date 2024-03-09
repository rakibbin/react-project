import React from 'react'
import Main_card from './admin2_components/Main_card'
import Admin2_nav from './admin2_components/Admin2_nav'

import Admin2_asidebar from './admin2_components/Admin2_asidebar'

export default function Admin_index2() {
  return (
    
    <>

 <Admin2_asidebar/>
<div className="content">
    <Admin2_nav/>
    <Main_card/>
  </div>
</>

  )
}
