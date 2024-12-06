import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = ({children}) => {
  return (
    <div>
     <Header></Header>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
