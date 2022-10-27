import React from 'react'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from "./components/services/Services"


const App = () => {
  return (
    <div>

        <Header/>
        <Nav/>
        <About/>
        <Services/>
        <Portofolio/>
        <Testimonials/>
        <Experience/>
        

    </div>
  )
}
export default App