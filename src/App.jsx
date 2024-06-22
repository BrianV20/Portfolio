import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMeContainer from './components/AboutMeContainer'
import EducationContainer from './components/EducationContainer'
import ProyectsContainer from './components/ProyectsContainer'
import ContactContainer from './components/ContactContainer'
import Footer from './components/Footer'

function App() {

  //la pagina va a ser blanca con algunos toques naranjas y violetas quizás
  return (
    <div className='w-full bg-slate-100'>
      <NavBar />
      <div className='mx-2 text-[1.15rem] roboto-regular'>
        <AboutMeContainer />
        <EducationContainer />
        <ProyectsContainer />
        <ContactContainer />
      </div>
      <Footer />
    </div>
  )
}

export default App
