import { useState } from 'react'
import Carousel from './hero/Carousel'
import Navbar from './components/navBar'
import About from './home/about'
import Project from './home/project'
import ThemeContextProvider from './context/theme'
import Qualification from './home/qualifications'
import Contact from './home/contact'
import Footer from './home/footer'
import { ThemeContext } from './context/theme';
import { useContext } from 'react'

function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
  return (
    <div style={{ background: theme.bg}}>
      <Navbar />
      <Carousel />
      <About />
      <Qualification />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
