import Link from 'next/link'
import React from 'react'

function Header() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container">
              <Link href='/'><a className="navbar-brand">newsBuzz</a></Link>
               <Link href='/'><a className="nav-link">HomePage</a></Link>
             </div>               
          </nav>
     )
}

export default Header
