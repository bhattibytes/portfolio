import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>This Is About Page</h1>
      <Footer />
    </div>
  )

}

export default About;