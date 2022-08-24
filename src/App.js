import Footer from "./components/Footer"
import LandingPage from "./components/page/LandingPage"
import Navbar from "./components/Navbar"
import ProductPage from "./components/page/ProductPage"
import { Routes, Route, useHref } from "react-router-dom"
import React from "react"

import getData from "./utils/data"
import ClientPage from "./components/page/ClientPage"
import Whatsapp from "./components/Whatsapp"
import AboutPage from "./components/page/AboutPage"
import DetailPage from "./components/page/DetailPage"
import FinishingMachine from "./components/page/FinishingMachine"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finishingMachine: getData().finishingMachine,
      profileCompany: getData().profileCompany,
    }
  }

  render() {
    return (
      <main className="main" style={{backgroundColor: 'white'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage profileCompany={this.state.profileCompany} />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/detail/:id" element={<DetailPage  />} />
          <Route path="/clients" element={<ClientPage  />} />
          <Route path="/finishing-machine" element={<FinishingMachine />} />
        </Routes>
        <Footer
          finishingMachine={this.state.finishingMachine}
          profileCompany={this.state.profileCompany}
        />
        <Whatsapp telp={this.state.profileCompany.Telepon} />
      </main>
    )
  }
}

// function App() {
//   const { finishingMachine, profileCompany } = getData()
//   return (
//     <main className="main">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/products" element={<ProductPage />} />
//       </Routes>
//       <Footer
//         finishingMachine={finishingMachine}
//         profileCompany={profileCompany}
//       />
//     </main>
//   )
// }

// export default App
