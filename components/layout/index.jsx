import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
     return (
          <div className="content">
               <Header/>
               {children}
               <Footer/>
          </div>
     )
}

export default Layout
