import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'
import Client from './Client'
import VisiMisi from './VisiMisi'
import Navbar from './Navbar'

import getData from '../utils/data'

const LandingPage = () => {
  const { finishingMachine, profileCompany } = getData()
  return (
      <main className="main" id="top">
        <Navbar />
        <Header />
        <VisiMisi />
        <Product />
        <Client />
        <Footer finishingMachine={finishingMachine} profileCompany={profileCompany}  />
      </main>
  )
}

export default LandingPage