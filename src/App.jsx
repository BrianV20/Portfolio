import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMeContainer from './components/AboutMeContainer'
import EducationContainer from './components/EducationContainer'
import ProyectsContainer from './components/ProyectsContainer'
import ContactContainer from './components/ContactContainer'
import Footer from './components/Footer'
import { languageContext } from './Contexts'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');

  return (
    <div className='w-full bg-slate-100'>
      <languageContext.Provider value={{ selectedLanguage, setSelectedLanguage }} >
        <NavBar />
        <div className='mx-2 text-[1.15rem] roboto-regular md:mx-14 xl:mx-[20rem] lg:mx-[5rem] text-gray-800'>
          <AboutMeContainer />
          <EducationContainer />
          <ProyectsContainer />
          <ContactContainer />
        </div>
        <Footer />
      </languageContext.Provider>
    </div>
  )
}

export default App